"""FastAPI application main entry point"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import settings
from .middleware.cors import setup_cors_middleware
from .routers import auth, users, analysis, upload, results, history, reports

# Create FastAPI app
app = FastAPI(
    title=settings.APP_NAME,
    description="AI-assisted personal health analysis platform",
    version=settings.APP_VERSION,
    docs_url="/docs",
    redoc_url="/redoc"
)

# Setup CORS
setup_cors_middleware(app)


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok", "app": settings.APP_NAME}


# Include routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(analysis.router)
app.include_router(upload.router)
app.include_router(results.router)
app.include_router(history.router)
app.include_router(reports.router)


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "app": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "docs": "/docs"
    }
