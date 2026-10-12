"""Upload service"""
from fastapi import HTTPException, status, UploadFile
from sqlalchemy.orm import Session
from pathlib import Path
import os
import hashlib
from uuid import UUID

from ..core.config import settings
from ..models.user import User
from ..models.analysis import Analysis
from ..models.uploaded_file import UploadedFile


class UploadService:
    """Service for file upload operations"""

    async def upload_file(
        self,
        db: Session,
        user: User,
        analysis_id: UUID,
        file: UploadFile
    ):
        """Upload file for analysis"""
        analysis = db.query(Analysis).filter(
            Analysis.id == analysis_id,
            Analysis.user_id == user.id
        ).first()

        if not analysis:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Analysis not found"
            )

        contents = await file.read()
        if len(contents) > settings.MAX_UPLOAD_SIZE:
            raise HTTPException(
                status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                detail="File size exceeds maximum allowed size"
            )

        Path(settings.UPLOAD_DIR).mkdir(parents=True, exist_ok=True)

        file_hash = hashlib.md5(contents).hexdigest()
        file_ext = Path(file.filename).suffix
        unique_filename = f"{file_hash}_{file.filename}"
        file_path = os.path.join(settings.UPLOAD_DIR, unique_filename)

        with open(file_path, "wb") as f:
            f.write(contents)

        new_file = UploadedFile(
            analysis_id=analysis_id,
            original_filename=file.filename,
            stored_filename=unique_filename,
            file_path=file_path,
            mime_type=file.content_type,
            file_size=len(contents),
        )

        db.add(new_file)
        db.commit()
        db.refresh(new_file)

        return {
            "analysis_id": str(analysis_id),
            "file_id": str(new_file.id),
            "filename": file.filename,
            "status": "uploaded",
            "message": "File uploaded successfully"
        }

    async def list_files(self, db: Session, user: User, analysis_id: UUID):
        """List files for analysis"""
        analysis = db.query(Analysis).filter(
            Analysis.id == analysis_id,
            Analysis.user_id == user.id
        ).first()

        if not analysis:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Analysis not found"
            )

        files = db.query(UploadedFile).filter(UploadedFile.analysis_id == analysis_id).all()
        return [
            {
                "id": str(f.id),
                "filename": f.original_filename,
                "file_size": f.file_size,
                "mime_type": f.mime_type,
                "uploaded_at": f.created_at
            }
            for f in files
        ]
