"""Result service"""
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from ..models.user import User
from ..models.analysis import Analysis
from ..models.combined_result import CombinedResult


class ResultService:
    """Service for result operations"""

    async def get_result(self, db: Session, user: User, analysis_id: int) -> CombinedResult:
        """Get combined analysis result"""
        analysis = db.query(Analysis).filter(
            Analysis.id == analysis_id,
            Analysis.user_id == user.id
        ).first()

        if not analysis:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Analysis not found"
            )

        result = db.query(CombinedResult).filter(
            CombinedResult.analysis_id == analysis_id
        ).first()

        if not result:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Result not found"
            )

        return result
