import React from 'react';
import Faq from '../components/Faq';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';

function FaqPage() {
  return (
    <div className='className="App"'>
         <div className='bg-image'>
                <Header />
                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "35vh" }}>
                    <Container>
                        <Row className="justify-content-center">
                            <h2 className="text-white text-center">FAQ</h2>
                        </Row>
                    </Container>
                </div>
            </div>

      <Faq/>
      <Footer />
    </div>
  );
}

export default FaqPage;
