"""Authentication router"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID

from ..database.database import get_db
from ..models.user import User
from ..schemas.auth import TokenResponse, TokenRefresh
from ..schemas.user import UserCreate, UserLogin, UserResponse
from ..services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["auth"])
auth_service = AuthService()


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(user_data: UserCreate, db: Session = Depends(get_db)):
    """Register a new user"""
    return await auth_service.register_user(db, user_data)


@router.post("/login", response_model=TokenResponse)
async def login(user_data: UserLogin, db: Session = Depends(get_db)):
    """Login user and return tokens"""
    return await auth_service.login(db, user_data.email, user_data.password)


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(token_data: TokenRefresh):
    """Refresh access token"""
    return await auth_service.refresh_token(token_data.refresh_token)


@router.post("/logout")
async def logout():
    """Logout user"""
    return {"message": "Successfully logged out"}
