import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FormComponent from '../components/FormComponent';
import { faPhone, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUsPage = () => {
    return (
        <div className='App'>
            <div className='bg-image'>
                <Header />
                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "35vh" }}>
                    <Container>
                        <Row className="justify-content-center">
                            <h2 className="text-white text-center">Contact Us</h2>
                        </Row>
                    </Container>
                </div>
            </div>

            <section className="contact-info-wrapper py-5">
                <Container>
                    <Row className="justify-content-around">
                        <Col xl={3} lg={4} md={6} sm={8}>
                            <Card className="text-center mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faComments} />   
                                    <Card.Title>Chat with Us</Card.Title>               
                                    <Card.Text>
                                        We've got live Social Experts waiting to help you Monday to Friday from 9am to 5pm EST.
                                    </Card.Text>
                                    <Button href="#" className='contact-button'>Chat With Us</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8}>
                            <Card className="text-center mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faEnvelope} />                  
                                    <Card.Title>Send Us Email</Card.Title>
                                    <Card.Text>
                                        Drop us an email at <a href="mailto:aleyase@roehampton.ac.uk">aleyase@roehampton.ac.uk</a> and you'll receive a reply within 24 hrs.
                                    </Card.Text>
                                    <Button variant="primary" href="#" className='contact-button'>Send Us Email</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8}>
                            <Card className="text-center mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faPhone} />                 
                                    <Card.Title>Make a Call</Card.Title>
                                    <Card.Text>
                                        Give us a ring. Our Experts are standing by Monday to Friday from 9am to 5pm EST.
                                    </Card.Text>
                                    <Button variant="primary" href="#" className='contact-button'>Call Us</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="map">

            </section>

            {/* Contact Form Section */}
            <section className="contact-form-wrap py-5">
                <FormComponent />
            </section>
            <Footer />
        </div>
    );
};

export default ContactUsPage;
