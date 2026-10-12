"""Reference ranges for laboratory values"""
from typing import Dict, Tuple


class ReferenceRanges:
    """Reference ranges for laboratory values"""
    
    # CBC Reference Ranges
    CBC_RANGES = {
        "hemoglobin": {
            "male": (13.5, 17.5),  # g/dL
            "female": (12.0, 15.5)  # g/dL
        },
        "hematocrit": {
            "male": (41, 53),  # %
            "female": (36, 46)  # %
        },
        "wbc": (4.5, 11.0),  # K/uL
        "platelets": (150, 400),  # K/uL
    }
    
    # Diabetes Panel Reference Ranges
    DIABETES_RANGES = {
        "glucose_fasting": (70, 100),  # mg/dL
        "glucose_random": (70, 140),  # mg/dL
        "hba1c": (0, 5.7),  # %
    }
    
    # Lipid Profile Reference Ranges
    LIPID_RANGES = {
        "total_cholesterol": (0, 200),  # mg/dL
        "ldl": (0, 100),  # mg/dL
        "hdl": (40, 300),  # mg/dL
        "triglycerides": (0, 150),  # mg/dL
    }
    
    @staticmethod
    def get_range(test_name: str, gender: str = None) -> Tuple[float, float]:
        """
        Get reference range for a laboratory test
        
        Args:
            test_name: Name of the laboratory test
            gender: Gender for gender-specific ranges
            
        Returns:
            Tuple of (min, max) reference values
        """
        # TODO: Implement range lookup logic
        return (0, 0)
