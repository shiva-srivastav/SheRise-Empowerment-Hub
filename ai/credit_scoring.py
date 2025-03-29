import pandas as pd
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib

def train_credit_model(data_path):
    print(f"Loading data from: {data_path}")
    
    # Check if data file exists
    if not os.path.exists(data_path):
        print(f"Error: Data file not found at {data_path}")
        print("Make sure to run generate_demo_data.py in the database directory first")
        return None
        
    # Load and preprocess the data
    data = pd.read_csv(data_path)
    print(f"Data loaded successfully with {len(data)} records")
    
    features = data[['transaction_history', 'social_score', 'business_performance']]
    target = data['credit_approved']

    # Split the dataset
    X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)
    
    # Train the RandomForest model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluate the model
    predictions = model.predict(X_test)
    accuracy = accuracy_score(y_test, predictions)
    print("Credit Scoring Model Accuracy:", accuracy)
    print("\nClassification Report:")
    print(classification_report(y_test, predictions))
    
    # Save the trained model
    model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'credit_model.pkl')
    joblib.dump(model, model_path)
    print(f"Model saved to {model_path}")
    
    return model

if __name__ == "__main__":
    # Get the correct path to the data file
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(current_dir)
    data_path = os.path.join(project_root, 'database', 'credit_data.csv')
    
    train_credit_model(data_path)