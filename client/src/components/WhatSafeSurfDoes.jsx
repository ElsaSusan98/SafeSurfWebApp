import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import home1 from "../assets/images/home1.webp"

const WhatSafeSurfDoes = () => {
  return (
    <section className="what-safe-surf-does py-5">
      <Container>
        <h2 className="text-center mb-5">What Does Safe Surf Web Application Do?</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img 
              src={home1} 
              alt="Safe Surf Functionality" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </Col>
          <Col md={6}>
            <p>
              Safe Surf is your go-to tool for staying safe online. Our web application analyzes URLs to determine if a site is phishing or legitimate, helping you avoid dangerous websites that might steal your personal information.
            
              Simply enter a URL, and Safe Surf's sophisticated algorithms will do the rest, providing you with an instant assessment of the site's safety.
            
              Protect your sensitive data and browse the web with confidence, knowing that Safe Surf has got your back.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatSafeSurfDoes;
