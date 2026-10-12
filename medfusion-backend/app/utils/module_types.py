"""Module type definitions"""
from enum import Enum


class ImageModuleType(str, Enum):
    """Image analysis module types"""
    CHEST_XRAY = "chest_xray"
    BONE_XRAY = "bone_xray"
    SKIN_LESION = "skin_lesion"


class LabModuleType(str, Enum):
    """Laboratory analysis module types"""
    CBC = "cbc"
    DIABETES = "diabetes"
    LIPID_PROFILE = "lipid_profile"
    KFT = "kft"  # Kidney Function Test
    LFT = "lft"  # Liver Function Test


class AnalysisStatus(str, Enum):
    """Analysis status types"""
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"
