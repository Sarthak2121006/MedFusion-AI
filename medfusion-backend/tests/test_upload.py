"""Upload tests"""
import pytest
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_upload_file(test_user_token):
    """Test file upload"""
    # TODO: Implement test
    pass
