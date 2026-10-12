"""Upload schemas"""
from pydantic import BaseModel
from typing import Optional
from uuid import UUID


class FileInfo(BaseModel):
    """File information schema"""
    filename: str
    file_type: str
    file_size: int
    mime_type: Optional[str] = None


class UploadResponse(BaseModel):
    """Upload response schema"""
    analysis_id: UUID
    file_id: UUID
    filename: str
    status: str
    message: str
