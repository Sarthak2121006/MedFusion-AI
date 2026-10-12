"""Authentication service"""
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta

from ..models.user import User
from ..schemas.user import UserCreate, UserUpdate
from ..schemas.auth import TokenResponse
from ..core.security import (
    verify_password, get_password_hash,
    create_access_token, create_refresh_token, decode_token
)


class AuthService:
    """Service for authentication operations"""
    
    async def register_user(self, db: Session, user_data: UserCreate) -> User:
        """Register a new user"""
        # Check if user already exists
        existing_user = db.query(User).filter(
            (User.email == user_data.email) | (User.username == user_data.username)
        ).first()
        
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email or username already exists"
            )
        
        # Create new user
        hashed_password = get_password_hash(user_data.password)
        new_user = User(
            email=user_data.email,
            username=user_data.username,
            full_name=user_data.full_name,
            hashed_password=hashed_password
        )
        
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    
    async def login(self, db: Session, email: str, password: str) -> TokenResponse:
        """Login user and return tokens"""
        user = db.query(User).filter(User.email == email).first()
        
        if not user or not verify_password(password, user.hashed_password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        
        # Create tokens
        access_token = create_access_token(data={"sub": user.id})
        refresh_token = create_refresh_token(data={"sub": user.id})
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type="bearer"
        )
    
    async def refresh_token(self, refresh_token: str) -> TokenResponse:
        """Refresh access token"""
        payload = decode_token(refresh_token)
        
        if payload is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token"
            )
        
        user_id = payload.get("sub")
        access_token = create_access_token(data={"sub": user_id})
        new_refresh_token = create_refresh_token(data={"sub": user_id})
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=new_refresh_token,
            token_type="bearer"
        )
    
    async def update_user(self, db: Session, user: User, user_update: UserUpdate) -> User:
        """Update user information"""
        if user_update.full_name is not None:
            user.full_name = user_update.full_name
        
        if user_update.password is not None:
            user.hashed_password = get_password_hash(user_update.password)
        
        db.commit()
        db.refresh(user)
        return user
