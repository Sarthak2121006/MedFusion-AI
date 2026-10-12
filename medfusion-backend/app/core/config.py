"""Application configuration settings"""
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra="ignore"
    )

    APP_NAME: str = "MedFusion AI"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False

    API_V1_STR: str = "/api/v1"

    DATABASE_URL: str = "sqlite:///./medfusion.db"
    SQLALCHEMY_ECHO: bool = False

    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8080"]
    CORS_ALLOW_CREDENTIALS: bool = True
    CORS_ALLOW_METHODS: List[str] = ["*"]
    CORS_ALLOW_HEADERS: List[str] = ["*"]

    MAX_UPLOAD_SIZE: int = 100 * 1024 * 1024
    UPLOAD_DIR: str = "data/uploads"
    PROCESSED_DIR: str = "data/processed"
    REPORTS_DIR: str = "data/reports"

    MODELS_DIR: str = "models"
    USE_GPU: bool = False

    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    EMAILS_FROM_EMAIL: str = "noreply@medfusion.ai"


settings = Settings()
