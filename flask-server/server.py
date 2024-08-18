from flask import Flask, request, jsonify
import joblib
import pandas as pd
from FeatExtract import extract_features  # Assuming extract_features is in feature_extraction.py

app = Flask(__name__)

# Load the trained model
model = joblib.load('xgb_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get data from the POST request
    url = data.get('url')  # Extract the URL from the JSON data
    
    # Extract features using the extract_features function
    features = extract_features(url)
    
    # Prepare the features for the model
    feature_names = [
        'Have_IP', 'Have_At', 'URL_Length', 'URL_Depth', 'Redirection',
        'https_Domain', 'TinyURL', 'Prefix/Suffix', 'DNS_Record', 
        'Web_Traffic', 'Domain_Age', 'Domain_End', 'iFrame', 'Mouse_Over', 
        'Right_Click', 'Web_Forwards', 'Num_Dots', 'HTTPS_Token', 
        'Suspicious_Words', 'Content_Length', 'Num_Images', 'Num_Scripts'
    ]
    
    df_test = pd.DataFrame([features], columns=feature_names)
    
    # Make a prediction
    prediction = model.predict(df_test)[0]
    
    # Convert prediction to readable format
    result = 'This site is a phishing site!' if prediction == 1 else 'This site is safe.'

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
