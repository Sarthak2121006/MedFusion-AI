"""Helper utilities"""
from typing import Any, List
import json


def safe_json_encode(obj: Any) -> str:
    """
    Safely encode object to JSON
    
    Args:
        obj: Object to encode
        
    Returns:
        JSON string
    """
    try:
        return json.dumps(obj, default=str)
    except Exception:
        return str(obj)


def paginate(items: List[Any], skip: int = 0, limit: int = 10) -> List[Any]:
    """
    Paginate a list of items
    
    Args:
        items: List to paginate
        skip: Number of items to skip
        limit: Maximum number of items to return
        
    Returns:
        Paginated list
    """
    return items[skip : skip + limit]


def format_dict(data: dict, indent: int = 2) -> str:
    """
    Format dictionary as pretty JSON string
    
    Args:
        data: Dictionary to format
        indent: Indentation level
        
    Returns:
        Formatted string
    """
    return json.dumps(data, indent=indent, default=str)
