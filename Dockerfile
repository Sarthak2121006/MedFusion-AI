# MedFusion AI - Multi-Runtime Production Dockerfile (Node.js + Python + Tesseract)
FROM node:20-bookworm-slim

# Set environment
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    PYTHON_PATH=python3 \
    TESSERACT_CMD=/usr/bin/tesseract

# Install Python 3, pip, and Tesseract OCR engine
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    python3-venv \
    tesseract-ocr \
    tesseract-ocr-eng \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY requirements.txt ./
RUN pip3 install --no-cache-dir --break-system-packages -r requirements.txt

# Install Node.js dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application source code
COPY . .

# Ensure storage directories exist
RUN mkdir -p uploads assets medfusion-frontend

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); http.get('http://127.0.0.1:3000/api/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1));"

CMD ["npm", "start"]
