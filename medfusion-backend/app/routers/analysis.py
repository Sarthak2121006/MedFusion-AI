"""Analysis router"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from ..database.database import get_db
from ..models.user import User
from ..models.analysis import Analysis
from ..schemas.analysis import AnalysisCreate, AnalysisResponse, AnalysisUpdate
from ..core.dependencies import get_current_user
from ..services.analysis_service import AnalysisService

router = APIRouter(prefix="/analysis", tags=["analysis"])
analysis_service = AnalysisService()


@router.post("", response_model=AnalysisResponse, status_code=status.HTTP_201_CREATED)
async def create_analysis(
    analysis_data: AnalysisCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create a new analysis"""
    return await analysis_service.create_analysis(db, current_user, analysis_data)


@router.get("", response_model=List[AnalysisResponse])
async def list_analyses(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """List user's analyses"""
    return db.query(Analysis).filter(Analysis.user_id == current_user.id).all()


@router.get("/{analysis_id}", response_model=AnalysisResponse)
async def get_analysis(
    analysis_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get analysis details"""
    analysis = db.query(Analysis).filter(
        Analysis.id == analysis_id,
        Analysis.user_id == current_user.id
    ).first()
    if not analysis:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Analysis not found")
    return analysis


@router.put("/{analysis_id}", response_model=AnalysisResponse)
async def update_analysis(
    analysis_id: UUID,
    analysis_update: AnalysisUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update analysis"""
    return await analysis_service.update_analysis(db, analysis_id, current_user, analysis_update)


@router.delete("/{analysis_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_analysis(
    analysis_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete analysis"""
    return await analysis_service.delete_analysis(db, analysis_id, current_user)
