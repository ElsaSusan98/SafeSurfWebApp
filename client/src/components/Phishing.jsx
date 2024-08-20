import React from 'react';
import {Container, Row, Col, Card } from 'react-bootstrap';

const Phishing = () => {
  return (
    <section className="what-safe-surf-does py-5">
      <Container>
        <h2 className="text-center mb-5">How to Check URL?</h2>


        <p className='text-center p-3'>
          You can easily check whether it's safe to access a website by using Link Checker to rapidly scan the URL if you come across one that you want to click on but it appears dubious.
        </p>

      </Container>
      <Container className="mx-auto my-section">
      <Row className="justify-content-center position-relative w-100">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-start border-secondary rounded-md overflow-hidden transition-colors duration-medium p-4">
            <Card.Body className="d-flex flex-column h-100">
              <Card.Title className="mb-2">
                <span className="text-accent border-bottom pb-2 border-accent">01</span>
              </Card.Title>
              <Card.Text>Enter your link.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-start  border-secondary rounded-md overflow-hidden transition-colors duration-medium p-4">
            <Card.Body className="d-flex flex-column h-100">
              <Card.Title className="mb-2">
                <span className="text-accent border-bottom pb-2 border-accent">02</span>
              </Card.Title>
              <Card.Text>Wait for a few moments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-start border-secondary rounded-md overflow-hidden transition-colors duration-medium p-4">
            <Card.Body className="d-flex flex-column h-100">
              <Card.Title className="mb-2">
                <span className="text-accent border-bottom pb-2 border-accent">03</span>
              </Card.Title>
              <Card.Text>See the results.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </section>
  );
};

export default Phishing;
