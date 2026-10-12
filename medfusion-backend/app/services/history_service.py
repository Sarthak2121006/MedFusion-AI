"""History service"""
from sqlalchemy.orm import Session

from ..models.user import User
from ..models.analysis import Analysis


class HistoryService:
    """Service for history operations"""
    
    async def get_history(
        self,
        db: Session,
        user: User,
        skip: int = 0,
        limit: int = 10
    ):
        """Get user's analysis history"""
        return db.query(Analysis).filter(
            Analysis.user_id == user.id
        ).order_by(Analysis.created_at.desc()).offset(skip).limit(limit).all()
