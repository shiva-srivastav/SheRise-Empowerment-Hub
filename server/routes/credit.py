from flask import Blueprint, request, jsonify
import joblib
import numpy as np
import os
import sys

credit_blueprint = Blueprint('credit', __name__)

# Get the correct path to the model file
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
model_path = os.path.join(os.path.dirname(BASE_DIR), 'ai', 'credit_model.pkl')

# Verify if the file exists and print the path for debugging
print(f"Looking for model at: {model_path}")
if not os.path.exists(model_path):
    print(f"Warning: Model file not found at {model_path}")
    print("Make sure to run credit_scoring.py in the ai directory first to generate the model")
    # Don't exit, but provide useful error information
else:
    # Load the pre-trained credit scoring model
    model = joblib.load(model_path)

@credit_blueprint.route('/score', methods=['POST'])
def credit_score():
    # Check if model is loaded
    if 'model' not in globals():
        return jsonify({
            'error': 'Model not loaded', 
            'message': 'Please run credit_scoring.py in the ai directory first'
        }), 500
        
    # Expect JSON data with keys: transaction_history, social_score, business_performance
    data = request.get_json()
    features = [
        data.get('transaction_history', 0),
        data.get('social_score', 0),
        data.get('business_performance', 0)
    ]
    prediction = model.predict(np.array([features]))[0]
    return jsonify({'credit_approved': int(prediction)})