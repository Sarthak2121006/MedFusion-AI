"""Analysis schemas"""
from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List
from uuid import UUID


class AnalysisBase(BaseModel):
    """Base analysis schema"""
    pass


class AnalysisCreate(AnalysisBase):
    """Analysis creation schema"""
    pass


class AnalysisUpdate(BaseModel):
    """Analysis update schema"""
    status: Optional[str] = None


class AnalysisResponse(AnalysisBase):
    """Analysis response schema"""
    id: UUID
    user_id: UUID
    status: str
    created_at: datetime
    updated_at: datetime
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    error_message: Optional[str] = None

    class Config:
        from_attributes = True
