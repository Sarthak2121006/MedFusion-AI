"""File validation utilities"""
from pathlib import Path
from typing import Tuple
import mimetypes


class FileValidator:
    """Validate uploaded files"""
    
    ALLOWED_EXTENSIONS = {
        "image": [".jpg", ".jpeg", ".png", ".dcm", ".gif"],
        "pdf": [".pdf"],
        "document": [".doc", ".docx", ".txt"]
    }
    
    MAX_FILE_SIZE = 100 * 1024 * 1024  # 100MB
    
    @staticmethod
    def validate_extension(filename: str, file_type: str = None) -> bool:
        """
        Validate file extension
        
        Args:
            filename: Name of the file
            file_type: Expected file type
            
        Returns:
            Whether file extension is allowed
        """
        ext = Path(filename).suffix.lower()
        
        if file_type and file_type in FileValidator.ALLOWED_EXTENSIONS:
            return ext in FileValidator.ALLOWED_EXTENSIONS[file_type]
        
        # Check all allowed extensions
        all_allowed = []
        for extensions in FileValidator.ALLOWED_EXTENSIONS.values():
            all_allowed.extend(extensions)
        
        return ext in all_allowed
    
    @staticmethod
    def validate_size(file_size: int) -> bool:
        """
        Validate file size
        
        Args:
            file_size: Size of file in bytes
            
        Returns:
            Whether file size is allowed
        """
        return file_size <= FileValidator.MAX_FILE_SIZE
    
    @staticmethod
    def get_mime_type(filename: str) -> str:
        """
        Get MIME type of file
        
        Args:
            filename: Name of the file
            
        Returns:
            MIME type
        """
        mime_type, _ = mimetypes.guess_type(filename)
        return mime_type or "application/octet-stream"
