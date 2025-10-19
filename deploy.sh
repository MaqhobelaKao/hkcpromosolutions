#!/bin/bash

# Set project directory
PROJECT_DIR="."

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Error: $PROJECT_DIR does not exist. Please check the path."
  exit 1
fi

# Check if package.json exists
if [ ! -f "$PROJECT_DIR/package.json" ]; then
  echo "Error: package.json not found in $PROJECT_DIR. Please ensure the project files are present."
  exit 1
fi

# Set permissions
echo "Setting permissions..."
chmod -R 755 $PROJECT_DIR
chmod -R 777 $PROJECT_DIR/media

# Start application with PM2
echo "Starting application..."
cd $PROJECT_DIR
pm2 stop evershop 2>/dev/null || true
pm2 start npm --name "evershop" -- start

echo "Application started successfully!"