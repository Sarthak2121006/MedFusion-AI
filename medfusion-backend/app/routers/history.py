"""History router"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from ..database.database import get_db
from ..models.user import User
from ..models.analysis import Analysis
from ..schemas.analysis import AnalysisResponse
from ..core.dependencies import get_current_user

router = APIRouter(prefix="/history", tags=["history"])


@router.get("", response_model=List[AnalysisResponse])
async def get_analysis_history(
    skip: int = 0,
    limit: int = 10,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get user's analysis history"""
    return db.query(Analysis).filter(
        Analysis.user_id == current_user.id
    ).order_by(Analysis.created_at.desc()).offset(skip).limit(limit).all()
