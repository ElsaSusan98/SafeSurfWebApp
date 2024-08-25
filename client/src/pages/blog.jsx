import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported
import Header from '../components/Header';
import Footer from '../components/Footer';
import service1 from "../assets/images/service1.jpg"
import service2 from "../assets/images/service2.jpg"
import service3 from "../assets/images/service3.jpg"
import { Link } from 'react-router-dom';
const BlogPage = () => {
    const blogPosts = [
        {
          title: 'How to Detect Phishing Websites: A Comprehensive Guide',
          date: 'August 20, 2024',
          author: 'Cybersecurity Expert',
          imageSrc: service1, 
          link: '/service/',
          description: 'Learn how to identify phishing websites and protect yourself from online scams. This guide covers the common signs of phishing attempts and provides tips on how to avoid them.The importance of detecting scam websites is crucial due to the increasing complexity of phishing tactics. Traditional methods of finding phishing websites are blacklist-based systems and Rule-Based Systems are generally unable to identify the dynamic tactics used by cybercriminals. The blacklisting methods are time consuming, and which will fail in the case of newly developed phishing website until it is reported as scam. ',
        },
        {
          title: 'Top 10 Red Flags of a Phishing Website',
          date: 'July 15, 2024',
          author: 'Security Analyst',
          imageSrc: service2,
          link: '/service/',
          description: 'Discover the top 10 red flags that can help you spot a phishing website. From suspicious URLs to fake login forms, this post will teach you what to look out for.The importance of detecting scam websites is crucial due to the increasing complexity of phishing tactics. Traditional methods of finding phishing websites are blacklist-based systems and Rule-Based Systems are generally unable to identify the dynamic tactics used by cybercriminals. The blacklisting methods are time consuming, and which will fail in the case of newly developed phishing website until it is reported as scam. ',
        },
        {
          title: 'Phishing Websites: How They Work and How to Stay Safe',
          date: 'June 30, 2024',
          author: 'Tech Blogger',
          imageSrc: service3,
          link: '/service/',
          description: 'This post explains the inner workings of phishing websites and offers practical advice on how to avoid becoming a victim. Stay informed and secure your online presence.The importance of detecting scam websites is crucial due to the increasing complexity of phishing tactics. Traditional methods of finding phishing websites are blacklist-based systems and Rule-Based Systems are generally unable to identify the dynamic tactics used by cybercriminals. The blacklisting methods are time consuming, and which will fail in the case of newly developed phishing website until it is reported as scam. ',
        }
  ];

  return (
    <div className="App">
      <div className='bg-image'>
      <Header />
      <div className="d-flex align-items-center justify-content-center" style = {{minHeight: "50vh"}}>
        <Container>
          <Row className="justify-content-center">
            <h2 className="text-white text-center">Blog</h2>
          </Row>
        </Container>
      </div>
      </div>
      
      <section className="services">
        <Container>
          <Row>
            {blogPosts.map((post, index) => (
              <Col md={12} key={index}>
                <Card className="mb-4 service-blog">
                  <Card.Img variant="top" src={post.imageSrc} height={"500px"} width={"952px"}/>
                  <Card.Body>
                    <Card.Title><a href={post.link}>{post.title}</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Posted By {post.author}</Card.Subtitle>
                    <Card.Text>{post.description}</Card.Text>
                    {/* <Button variant="primary" href={post.link}>Read more</Button> */}
                    <Link to={post.link}>Read More</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
