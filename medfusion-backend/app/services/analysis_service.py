"""Analysis service"""
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID

from ..models.user import User
from ..models.analysis import Analysis
from ..schemas.analysis import AnalysisCreate, AnalysisUpdate


class AnalysisService:
    """Service for analysis operations"""

    async def create_analysis(
        self,
        db: Session,
        user: User,
        analysis_data: AnalysisCreate
    ) -> Analysis:
        """Create a new analysis"""
        new_analysis = Analysis(
            user_id=user.id,
            status="created",
        )

        db.add(new_analysis)
        db.commit()
        db.refresh(new_analysis)
        return new_analysis

    async def update_analysis(
        self,
        db: Session,
        analysis_id: UUID,
        user: User,
        analysis_update: AnalysisUpdate
    ) -> Analysis:
        """Update analysis"""
        analysis = db.query(Analysis).filter(
            Analysis.id == analysis_id,
            Analysis.user_id == user.id
        ).first()

        if not analysis:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Analysis not found"
            )

        if analysis_update.status is not None:
            analysis.status = analysis_update.status

        db.commit()
        db.refresh(analysis)
        return analysis

    async def delete_analysis(
        self,
        db: Session,
        analysis_id: UUID,
        user: User
    ):
        """Delete analysis"""
        analysis = db.query(Analysis).filter(
            Analysis.id == analysis_id,
            Analysis.user_id == user.id
        ).first()

        if not analysis:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Analysis not found"
            )

        db.delete(analysis)
        db.commit()
        return None
