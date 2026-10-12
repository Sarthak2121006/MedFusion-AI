"""Result schemas"""
from pydantic import BaseModel
from datetime import datetime
from typing import Optional, Any, Dict
from uuid import UUID


class ResultBase(BaseModel):
    """Base result schema"""
    summary: Optional[str] = None


class ResultCreate(ResultBase):
    """Result creation schema"""
    pass


class ResultResponse(ResultBase):
    """Result response schema"""
    id: UUID
    analysis_id: UUID
    overall_findings: Optional[str] = None
    important_abnormalities: Optional[Dict[str, Any]] = None
    summary: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
