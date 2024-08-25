import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image, Form, Button } from 'react-bootstrap';
import service1 from "../assets/images/service1.jpg"
import service2 from "../assets/images/service2.jpg"
import service3 from "../assets/images/service3.jpg"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { faUser, faCalendarDays, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicePage = () => {
    return (
        <div className='className="App"'>
            <div className='bg-image'>
                <Header />
                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "35vh" }}>
                    <Container>
                        <Row className="justify-content-center">
                            <h2 className="text-white text-center">How to Detect Phishing Websites: A Comprehensive Guide</h2>
                        </Row>
                    </Container>
                </div>
            </div>

            <section className="standard-blog-area inner-blog-area blog-details-area">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={8} lg={7}>
                            <div className="postbox__wrapper">
                                <article className="standard-blog-post format-image">
                                    <Card className="mb-4">
                                        <Card.Img
                                            src={service1}
                                            alt="The Challenge of Real-Time Cyber Protection"
                                        />
                                        <Card.Body>
                                            <ListGroup horizontal className="mb-3">
                                                <ListGroup.Item><FontAwesomeIcon icon={faUser} /> Cyber</ListGroup.Item>
                                                <ListGroup.Item><FontAwesomeIcon icon={faCalendarDays} /> August 22, 2022</ListGroup.Item>
                                                <ListGroup.Item><FontAwesomeIcon icon={faComment} />Comments</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Title>The Challenge of Real-Time Cyber Protection</Card.Title>
                                            <Card.Text>
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus...
                                            </Card.Text>
                                            <blockquote className="blockquote">
                                                <p>“Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae”</p>
                                            </blockquote>
                                            <Card.Text>
                                                Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores quas molestias excepturi sint occaecati cupiditate non provident...
                                            </Card.Text>
                                            <div className="blog-details-bottom">
                                                <div className="d-flex justify-content-between">
                                                    <div className="tg-post-tag">
                                                        <h5 className="tag-title">Post Tags:</h5>
                                                        <a href="#">Cyber</a>, <a href="#">Development</a>, <a href="#">Marketing</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </article>

                            </div>
                        </Col>
                        <Col xl={4} lg={5} md={10}>
                            <aside className="blog-sidebar">
                                <Card className="mb-4">
                                    <Card.Header>Search</Card.Header>
                                    <Card.Body>
                                        <Form action="/" method="get">
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Search" name="s" required />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" style={{ marginTop: 12 }}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Header>Explore Categories</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><a href="#">Design</a></ListGroup.Item>
                                        <ListGroup.Item><a href="#">Finance</a> </ListGroup.Item>
                                        <ListGroup.Item><a href="#">Marketing</a> </ListGroup.Item>
                                        <ListGroup.Item><a href="#">Office</a></ListGroup.Item>
                                        <ListGroup.Item><a href="#">Security</a> </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Header>Recent Posts</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <a href="#"><Image src={service2} thumbnail /></a>
                                            <div className="mt-2">
                                                <h6><a href="#">Cybersecurity Attacks & Security Industry</a></h6>
                                                <small><i className="far fa-calendar-alt"></i> August 22, 2022</small>
                                            </div>
                                        </ListGroup.Item>
                                        {/* Repeat the ListGroup.Item for other recent posts */}
                                    </ListGroup>
                                </Card>
                                <Card className="mb-4">
                                    <Card.Header>Popular Tags</Card.Header>
                                    <Card.Body>
                                        <div className="tagcloud">
                                            <a href="#" className="badge badge-primary">Cyber</a>
                                            <a href="#" className="badge badge-secondary">Development</a>
                                            <a href="#" className="badge badge-success">Digital</a>
                                            <a href="#" className="badge badge-danger">Innovation</a>
                                            <a href="#" className="badge badge-warning">Marketing</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </aside>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default ServicePage;
