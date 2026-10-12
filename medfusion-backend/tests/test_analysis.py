"""Analysis tests"""
import pytest
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_create_analysis(test_user_token):
    """Test analysis creation"""
    # TODO: Implement test
    pass


def test_list_analyses(test_user_token):
    """Test listing analyses"""
    # TODO: Implement test
    pass


def test_get_analysis(test_user_token):
    """Test getting analysis details"""
    # TODO: Implement test
    pass
