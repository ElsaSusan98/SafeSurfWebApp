import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Logo1.png";

const Footer = () => {
  return (
    <>
    <footer className={`footer text-white bg-footer ${window.innerWidth <= 576 ? 'text-center' : ''}`}>
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <img src={logo}  height={150} width={"auto"} alt="safesurf"></img>
            <h5 className='text-white text-center'>SAFE SURF</h5>
          </Col>
          <Col lg={3} md={6}>
            <h5>KNOW MORE</h5>
            <ul className="list-unstyled">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contactus">CONTACT</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li><Link to="/services">OUR STORY</Link></li>
              <li><Link to="/services">SERVICES</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5>CONTACT US</h5>
            <ul className="list-unstyled">
              <li>Email: aleyase@roehampton.ac.uk</li>
              <li>Phone: 123-456-7890</li>
            </ul>
            <div className="social-icon">
              <ul>
                <li><Link to=""><FontAwesomeIcon icon={faTwitter} /></Link></li>
                <li><Link to=""><FontAwesomeIcon icon={faFacebook}/></Link></li>
                <li><Link to=""><FontAwesomeIcon icon={faInstagram}/></Link></li>
                <li><Link to=""><FontAwesomeIcon icon={faLinkedin} /></Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      
      </Container>
   
    </footer>
    <div className="footer-end text-dark py-2">
    <div className="container text-center">
      <p className="mb-0">© 2024 Safe Surf. All Rights Reserved.</p>
    </div>
  </div>
  </>
  );
};

export default Footer;