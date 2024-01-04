import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img.png";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <p className="hero-subtitle">Trending products in {year}</p>
                <h2>
                  Make Your Interior More Minimalistic & Modern With LuminaLoom
                </h2>
                <p>
                  Revitalize your space with LuminaLoom, explore sleek furniture that 
                  blends form and function, creating a harmonious, clutter-free haven.
                  Elevate your home with sophistication, comfort, and timeless style.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={heroImage} alt="heroImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
