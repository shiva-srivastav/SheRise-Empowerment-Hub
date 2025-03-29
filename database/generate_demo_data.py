import pandas as pd
import numpy as np
import os

def generate_credit_data(num_records=1000, filename='credit_data.csv'):
    np.random.seed(42)
    
    # Generate meaningful features with realistic distributions
    transaction_history = np.random.normal(loc=50, scale=20, size=num_records).clip(0, 100).astype(int)
    social_score = np.random.normal(loc=60, scale=15, size=num_records).clip(0, 100).astype(int)
    business_performance = np.random.normal(loc=55, scale=18, size=num_records).clip(0, 100).astype(int)
    
    data = {
        'transaction_history': transaction_history,
        'social_score': social_score,
        'business_performance': business_performance
    }
    df = pd.DataFrame(data)
    
    # Approve credit if the weighted average score is above 50
    # Giving more weight to transaction history and business performance
    weights = {'transaction_history': 0.4, 'social_score': 0.2, 'business_performance': 0.4}
    df['weighted_score'] = (
        df['transaction_history'] * weights['transaction_history'] +
        df['social_score'] * weights['social_score'] +
        df['business_performance'] * weights['business_performance']
    )
    df['credit_approved'] = (df['weighted_score'] > 50).astype(int)
    
    # Drop the intermediate column used for calculation
    df = df.drop('weighted_score', axis=1)
    
    # Create the file in the current directory
    output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), filename)
    df.to_csv(output_path, index=False)
    print(f"Demo credit data generated and saved to {output_path}")
    print(f"Dataset shape: {df.shape}")
    print(f"Credit approval rate: {df['credit_approved'].mean():.2%}")

if __name__ == "__main__":
    generate_credit_data()