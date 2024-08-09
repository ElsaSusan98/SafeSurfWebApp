
import requests
from bs4 import BeautifulSoup
import whois
import tldextract
import socket
from datetime import datetime
import pandas as pd

def extract_features(url):
    features = {}
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
    except:
        response = None
        soup = None

    features['Domain'] = extract_domain(url)
    features['Have_IP'] = have_ip(url)
    features['Have_At'] = have_at(url)
    features['URL_Length'] = len(url)
    features['URL_Depth'] = url_depth(url)
    features['Redirection'] = redirection(response)
    features['https_Domain'] = https_domain(url)
    features['TinyURL'] = tiny_url(url)
    features['Prefix/Suffix'] = prefix_suffix(url)
    features['DNS_Record'] = dns_record(url)
    features['Web_Traffic'] = web_traffic(url)
    features['Domain_Age'] = domain_age(url)
    features['Domain_End'] = domain_end(url)
    features['iFrame'] = iframe(soup)
    features['Mouse_Over'] = mouse_over(response)
    features['Right_Click'] = right_click(response)
    features['Web_Forwards'] = web_forwards(response)

    # Additional features
    features['Num_Dots'] = num_dots(url)
    features['HTTPS_Token'] = https_token(url)
    features['Suspicious_Words'] = suspicious_words(url)
    features['Content_Length'] = content_length(soup)
    features['Num_Images'] = num_images(soup)
    features['Num_Scripts'] = num_scripts(soup)

    features['Label'] = None  # This should be provided if you have labeled data

    return features

def extract_domain(url):
    domain = tldextract.extract(url)
    return domain.domain

def have_ip(url):
    try:
        socket.inet_aton(url)
        return 1
    except socket.error:
        return 0

def have_at(url):
    return 1 if '@' in url else 0

def url_depth(url):
    return len(url.split('/')) - 3

def redirection(response):
    return 1 if response and len(response.history) > 0 else 0

def https_domain(url):
    return 1 if 'https' in url else 0

def tiny_url(url):
    return 1 if len(url) < 20 else 0

def prefix_suffix(url):
    return 1 if '-' in tldextract.extract(url).domain else 0

def dns_record(url):
    try:
        domain = tldextract.extract(url).fqdn
        socket.gethostbyname(domain)
        return 1
    except socket.gaierror:
        return 0

def web_traffic(url):
    return 0

def domain_age(url):
    try:
        domain = tldextract.extract(url).fqdn
        w = whois.whois(domain)
        creation_date = w.creation_date
        if isinstance(creation_date, list):
            creation_date = creation_date[0]
        age = (datetime.now() - creation_date).days
        return age
    except:
        return -1

def domain_end(url):
    try:
        domain = tldextract.extract(url).fqdn
        w = whois.whois(domain)
        expiration_date = w.expiration_date
        if isinstance(expiration_date, list):
            expiration_date = expiration_date[0]
        days_to_end = (expiration_date - datetime.now()).days
        return days_to_end
    except:
        return -1

def iframe(soup):
    return 1 if soup and soup.find('iframe') else 0

def mouse_over(response):
    return 1 if response and "onmouseover" in response.text else 0

def right_click(response):
    return 1 if response and "event.button == 2" in response.text else 0

def web_forwards(response):
    return 1 if response and len(response.history) > 1 else 0

def num_dots(url):
    return url.count('.')

def https_token(url):
    domain = tldextract.extract(url)
    return 1 if 'https' in domain.domain else 0

def suspicious_words(url):
    suspicious_keywords = ['free', 'login', 'secure', 'account', 'update']
    return 1 if any(keyword in url.lower() for keyword in suspicious_keywords) else 0

def content_length(soup):
    return len(soup.get_text()) if soup else 0

def num_images(soup):
    return len(soup.find_all('img')) if soup else 0

def num_scripts(soup):
    return len(soup.find_all('script')) if soup else 0


# data = []
# i = 0
# for url in urls:
#     features = extract_features(url)
#     data.append(features)
#     i += 1
#     print(i)




