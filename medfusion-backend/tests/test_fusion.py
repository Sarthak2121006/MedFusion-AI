"""Fusion tests"""
import pytest

from app.ai.fusion.fusion_engine import FusionEngine


@pytest.fixture
def fusion_engine():
    """Create fusion engine instance"""
    return FusionEngine()


def test_fusion_engine_initialization(fusion_engine):
    """Test fusion engine initialization"""
    assert fusion_engine is not None
    assert fusion_engine.image_results == []
    assert fusion_engine.lab_results == []
