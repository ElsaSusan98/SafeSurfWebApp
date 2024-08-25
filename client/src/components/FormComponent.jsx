import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const FormComponent = () => {
    return (
        <>
          <Container>
          <Row className="justify-content-center mb-4">
            <Col xl={5} lg={7} md={9} sm={10}>
              <h2 className="text-center">Get in Touch</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xxl={8} xl={9} lg={10}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Control type="text" placeholder="Your full name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Control type="email" placeholder="Your email address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Control as="textarea" rows={5} placeholder="Write your message..." />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        </>
    );
};
export default FormComponent;