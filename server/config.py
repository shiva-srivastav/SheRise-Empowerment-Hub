import os

# Base directory of the project
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Path to the AI model
MODEL_PATH = os.path.join(BASE_DIR, 'ai', 'credit_model.pkl')

# Path to the demo data
DATA_PATH = os.path.join(BASE_DIR, 'database', 'credit_data.csv')