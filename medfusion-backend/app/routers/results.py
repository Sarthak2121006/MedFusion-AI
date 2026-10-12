"""Results router"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID

from ..database.database import get_db
from ..models.user import User
from ..schemas.result import ResultResponse
from ..core.dependencies import get_current_user
from ..services.result_service import ResultService

router = APIRouter(prefix="/results", tags=["results"])
result_service = ResultService()


@router.get("/{analysis_id}", response_model=ResultResponse)
async def get_analysis_result(
    analysis_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get analysis result"""
    return await result_service.get_result(db, current_user, analysis_id)
