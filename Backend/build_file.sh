#!/bin/bash

# Install required dependencies
pip3 install -r requirements.txt

# Collect static files
python3 manage.py collectstatic --noinput

# Apply migrations
python3 manage.py migrate
