

import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHeader = (route) => {
    navigate('/' + route);
  };

  return (
    <Navbar expand="lg"  className=" transparent-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} width="auto" height={100} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-3 mr-3">
            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/contactus">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;



