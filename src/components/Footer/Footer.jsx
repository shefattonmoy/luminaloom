import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
              <div>
                <h1 className="text-white">LuminaLoom</h1>
              </div>
            </div>
            <p className="footer-text mt-4">
            Inspiring elegance for your sanctuary. <br /> 
            Elevate with minimalist luxury. <br />
            Redefine living in sophistication.
              </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofas</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Armchairs</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">New Arrivals</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Popular Products</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
          <div className="footer-quick-links">
              <h4 className="quick-links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
          <div className="footer-quick-links">
              <h4 className="quick-links-title">Contact Us</h4>
              <ListGroup className="footer-contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Dhaka, Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+1234567890</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>luminaloom@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer-copyright">
              Copyright ©{year} developed by LuminaLoom Limited | All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
