import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/style.css';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import ready from "../assets/images/ready.webp";
import about1 from "../assets/images/about1.webp";
import about2 from "../assets/images/about2.webp";
import about3 from "../assets/images/about3.webp";
import WhatSafeSurfDoes from '../components/WhatSafeSurfDoes';
import Header from '../components/Header';
import Phishing from '../components/Phishing';
import Footer from '../components/Footer';

// import Header from '../components/Header';

const HomePage = () => {

  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();


  const handleSearch = async () => {
    // URL validation
    if (!isValidURL(url)) {
      setResult('Please enter a valid URL.');
      return;
    }

    setLoading(true);  // Start loading state
    setResult(null);   // Clear previous result

    try {
      // Send the URL to the backend for phishing detection
      const response = await axios.post('/predict', { url });

      // Update result based on API response
      if (response.data && response.data.result) {
        setResult(response.data.result); // Directly set the result from the response
      } else {
        setResult('Unexpected response format from the server.');
      }
    } catch (error) {
      // Handle errors
      setResult('Error checking the site.');
      console.error('There was an error making the request!', error);
    } finally {
      setLoading(false);  // End loading state
    }
  };

  // URL validation function
  const isValidURL = (url) => {
    try {
      new URL(url);  // Try to create a URL object
      return true;   // If successful, URL is valid
    } catch (e) {
      return false;  // If an error is thrown, URL is invalid
    }
  };




  // Determine the alert class based on result
  const getAlertClass = () => {
    if (result === 'Please enter a valid URL.') {
      return 'alert-info'; // Default alert for invalid URL
    } else if (result === 'This site is a phishing site!') {
      return 'alert-phishing'; // Custom class for phishing
    } else if (result === 'This site is safe.') {
      return 'alert-safe'; // Custom class for safe
    }
    return ''; // Default empty class
  };

  return (
    <div className="App">
      <div className='bg-image' style={{minHeight:"100vh"}}>
        <Header />

        {/* Home Page Content */}
        <div className="content-wrapper d-flex align-items-center justify-content-center">
          <Container>
            <Row className="justify-content-center">
              <h2 className="text-white text-center">Protect Yourself: Verify Website Safety Instantly</h2>

              <Col xs={6} md={8} lg={6}>
                <div className="text-white banner-content">

                  <p className="text-white text-center">Your go-to tool for detecting phishing websites.</p>
                  <div className="d-flex flex-column flex-md-row align-items-center">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter URL"
                      className="form-control me-md-2 mb-2 mb-md-0"
                      style={{ flex: 1 }}  // Make input field flexible
                    />
                    <button onClick={handleSearch} className="btn px-4 py-2 m-3 round-button">
                      Predict
                    </button>
                  </div>

                  {/* Spinner and Result */}
                  <div className="mt-3 text-center">
                    {loading && (
                      <div className="spinner-container">
                        <ThreeDots
                          color="#00BFFF"
                          height={50}
                          width={50}
                          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}

                        />
                      </div>
                    )}
                    {!loading && result && (
                      <div className={`mt-3 alert ${result.includes('phishing') ? 'alert-danger' : 'alert-info'}`}>
                        {result}
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <section className="what-is-phishing">
        <Container>
          <div className="whole-blue mb-4 mb-md-0">
            <h2 className="text-center mb-5">What is a phishing website?</h2>
            <Row className="align-items-center">

              <Col md={12}>
                <p>
                  Phishing is a malicious activity through which attackers defraud online users to get their sensitive information. Attackers mimic the features of reputable websites, which aim to disclose personal information such as user credentials for net banking or debit/credit card details, and other personal details. The common strategies used in phishing attacks are social engineering, which leads victims to believe that they are safe, and it’s all part of the data protection. Users will get these fraudulent website URLs via email, instant messaging, or text messages. Besides, phishing is also a kind of social control attack that aims to trick users into giving away account credentials or any private information via a fake message through email which leads to a website that is impersonating a real organisation.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <WhatSafeSurfDoes />
      {/* <section className="content text-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <h2>About Safe Surf</h2>
              <p>
                Safe Surf is designed to help you stay safe online by providing quick and accurate phishing detection.
                Simply enter a URL, and we'll check it against our sophisticated algorithms to determine whether it's a phishing site.
                Our mission is to make the internet a safer place by empowering users with the tools they need to protect their personal information.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="security-section">
        <Container>
          <h2 className="text-center">Our Security Protocols</h2>
          <Row className="text-center">
            <Col xs={12} md={4} className="mb-4">
              <div className="image-container">

                <img
                  src={about3}
                  alt="Protocol 1"
                  className="img-fluid mb-2"
                />
              </div>
              <h4>Security Services</h4>
              <p>
                This protocol ensures that all user data is encrypted and securely transmitted across our networks.
                We employ the latest encryption standards to safeguard your information.
              </p>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <div className="image-container">

                <img
                  src={about1}
                  alt="Protocol 2"
                  className="img-fluid mb-2"
                />
              </div>
              <h4> Data Privacy</h4>
              <p>
                Our authentication process includes multi-factor authentication (MFA) to add an extra layer of security
                to your accounts. This reduces the risk of unauthorized access.
              </p>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <div className="image-container">

                <img
                  src={about2}
                  alt="Protocol 3"
                  className="img-fluid mb-2"
                />
              </div>
              <h4>Industry Certified</h4>
              <p>
                We continuously monitor our systems for any suspicious activity and potential threats. Our
                real-time alert system helps us to respond swiftly to any security incidents.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Phishing />
      {/* <footer>
        <p>© 2024 Safe Surf. All rights reserved.</p>
        <p><a href="#contacts">Contact Us</a> | <a href="#faq">FAQ</a></p>
      </footer> */}
      <Footer />
    </div>
  );
}

export default HomePage;