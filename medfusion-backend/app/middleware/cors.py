"""CORS middleware configuration"""
from fastapi.middleware.cors import CORSMiddleware

from ..core.config import settings


def setup_cors_middleware(app):
    """
    Setup CORS middleware for FastAPI app
    
    Args:
        app: FastAPI application instance
    """
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=settings.CORS_ALLOW_CREDENTIALS,
        allow_methods=settings.CORS_ALLOW_METHODS,
        allow_headers=settings.CORS_ALLOW_HEADERS,
    )
