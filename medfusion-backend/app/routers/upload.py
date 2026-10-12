"""Upload router"""
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from uuid import UUID

from ..database.database import get_db
from ..models.user import User
from ..schemas.upload import UploadResponse
from ..core.dependencies import get_current_user
from ..services.upload_service import UploadService

router = APIRouter(prefix="/upload", tags=["upload"])
upload_service = UploadService()


@router.post("/{analysis_id}", response_model=UploadResponse)
async def upload_file(
    analysis_id: UUID,
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Upload file for analysis"""
    return await upload_service.upload_file(db, current_user, analysis_id, file)


@router.get("/{analysis_id}")
async def list_files(
    analysis_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """List files for analysis"""
    return await upload_service.list_files(db, current_user, analysis_id)
