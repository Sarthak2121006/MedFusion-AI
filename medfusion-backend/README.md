# MedFusion AI Backend

Professional AI-assisted personal health analysis platform with support for multiple medical imaging and laboratory report formats.

## Features

- Multi-modal health data analysis (medical images + laboratory reports)
- Secure user authentication with JWT
- AI-powered image classification (chest X-ray, bone X-ray, skin lesions)
- OCR for laboratory report processing
- Fusion engine for combining multiple analysis results
- PDF report generation
- RESTful API

## Project Structure

```
medfusion-backend/
├── app/
│   ├── core/              # Core configuration and security
│   ├── database/          # Database setup and models
│   ├── models/            # SQLAlchemy ORM models
│   ├── schemas/           # Pydantic schemas
│   ├── routers/           # API route handlers
│   ├── services/          # Business logic services
│   ├── ai/                # AI analysis modules
│   │   ├── image/         # Medical image analysis
│   │   ├── laboratory/    # Lab report processing
│   │   └── fusion/        # Multi-modal fusion engine
│   ├── utils/             # Utility functions
│   ├── middleware/        # Custom middleware
│   └── main.py            # FastAPI app
├── tests/                 # Test modules
├── data/                  # Data directories
├── models/                # Pre-trained AI models
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variables template
└── run.py                # Application entry point
```

## Installation

1. Clone the repository
2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Setup environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

5. Run the application:
   ```bash
   python run.py
   ```

The API will be available at `http://localhost:8000`
- API docs: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Logout user

### Users
- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/me` - Update current user
- `GET /api/v1/users/{user_id}` - Get user by ID

### Analysis
- `POST /api/v1/analysis` - Create analysis
- `GET /api/v1/analysis` - List user analyses
- `GET /api/v1/analysis/{analysis_id}` - Get analysis details
- `PUT /api/v1/analysis/{analysis_id}` - Update analysis
- `DELETE /api/v1/analysis/{analysis_id}` - Delete analysis

### Upload
- `POST /api/v1/upload/{analysis_id}` - Upload file
- `GET /api/v1/upload/{analysis_id}` - List files

### Results
- `GET /api/v1/results/{analysis_id}` - Get analysis result

### History
- `GET /api/v1/history` - Get analysis history

### Reports
- `GET /api/v1/reports/{analysis_id}` - Generate PDF report

## Development

### Running Tests
```bash
pytest
```

### Environment Variables
See `.env.example` for all configuration options.

## License

Proprietary - MedFusion AI
