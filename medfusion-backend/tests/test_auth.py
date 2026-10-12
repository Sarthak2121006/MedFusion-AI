"""Authentication tests"""
import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.schemas.user import UserCreate, UserLogin

client = TestClient(app)


@pytest.fixture
def test_user_data():
    """Test user data"""
    return {
        "email": "test@example.com",
        "username": "testuser",
        "full_name": "Test User",
        "password": "testpassword123"
    }


def test_register_user(test_user_data):
    """Test user registration"""
    response = client.post("/auth/register", json=test_user_data)
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == test_user_data["email"]


def test_login_user(test_user_data):
    """Test user login"""
    # First register
    client.post("/auth/register", json=test_user_data)
    
    # Then login
    login_data = {
        "email": test_user_data["email"],
        "password": test_user_data["password"]
    }
    response = client.post("/auth/login", json=login_data)
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data
