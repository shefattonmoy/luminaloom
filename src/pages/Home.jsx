import React, {useState, useEffect} from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products.js';
import Helmet from "../components/Helmet/Helmet.js";
import Services from "../services/Services.jsx";
import ProductsList from "../components/UI/ProductsList.jsx";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img.png";

const Home = () => {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredProducts = products.filter((item) => item.category === "chair");

    setData(filteredProducts);
  }, []);

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

      <Services></Services>

      <section className="trending-products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Trending Products</h2>
            </Col>
            <ProductsList data={data}></ProductsList>
          </Row>
        </Container>
      </section>

      <section className="best-sales">
        <Container>
        <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Best Selling Products</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
