"""Report service"""
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from pathlib import Path
import os
from uuid import UUID

from ..core.config import settings
from ..models.user import User
from ..models.analysis import Analysis


class ReportService:
    """Service for report generation"""

    async def generate_report(
        self,
        db: Session,
        user: User,
        analysis_id: UUID
    ):
        """Generate PDF report for analysis"""
        analysis = db.query(Analysis).filter(
            Analysis.id == analysis_id,
            Analysis.user_id == user.id
        ).first()

        if not analysis:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Analysis not found"
            )

        Path(settings.REPORTS_DIR).mkdir(parents=True, exist_ok=True)

        return {
            "analysis_id": str(analysis_id),
            "status": "generating",
            "message": "Report generation in progress"
        }
