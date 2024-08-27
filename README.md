# Phishing Website Detection using Machine Learning

Safe Surf is your go-to tool for staying safe online. Our web application analyzes URLs to determine if a site is phishing or legitimate.

## Data Collection

Phishing URL and Legitimate URL dataset can be found under the Dataset folder.
1. Beningn_list_big_final.csv: This file conatins a total number 35378 URL and from this 5000 url selected. https://www.unb.ca/cic/datasets/url-2016.html.
2. verified_online :This file contain a dataset of phishing URLs download from the https://www.phishtank.com/developer_info.php.
3. url_features.csv : This file contains the 10000 extracted features from both legitimate and phishing url dataset.

## Feature Extraction

The collected URLs and the relevant features are extracted in this module. Address bar-based, domain-based, and HTML & JavaScript-based features need to be extracted from the URLs.In total 22 features are extracted from the dataset.
The feature extraction code can be found in FeatExtract.ipynb 


## Models & Training

This module trains the extracted features with various machine learning models. Which include 
1. Decision tree
2. XGBoost
3. Random Forest
4. Logical regression 
5. Support vector machines
Evaluate the performance of the trained model and select the best-performed model for deployment.All these model testing and traing can be found in Finalmodel.ipynb file.

## Installation

Requirements :Python 3.8 or higher
pip package manager
React js (for frontend development)
Git

### For frontend In the project directory, you can run:

Install Node.js dependencies:
cd client
npm install 
npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### For the backend
Web Interface:

cd flask-server
python server.py

Navigate to http://localhost:5000 (or the appropriate URL if deployed).
Enter the URL you want to analyze in the input field and click "Submit."
The site will display whether the URL is potentially a phishing site, along with the associated risk score.

API Access:
Endpoint: /api/detect
Method: POST


Thank you for using the Phishing Detection Website! We hope it helps you stay safe online.







