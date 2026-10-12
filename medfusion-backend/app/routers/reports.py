"""Reports router"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID

from ..database.database import get_db
from ..models.user import User
from ..core.dependencies import get_current_user
from ..services.report_service import ReportService

router = APIRouter(prefix="/reports", tags=["reports"])
report_service = ReportService()


@router.get("/{analysis_id}")
async def generate_report(
    analysis_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Generate PDF report for analysis"""
    return await report_service.generate_report(db, current_user, analysis_id)
