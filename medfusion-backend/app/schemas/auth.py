"""Authentication schemas"""
from pydantic import BaseModel, EmailStr


class TokenResponse(BaseModel):
    """Token response schema"""
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class TokenRefresh(BaseModel):
    """Token refresh request schema"""
    refresh_token: str


class TokenPayload(BaseModel):
    """JWT token payload schema"""
    sub: int
    exp: int
