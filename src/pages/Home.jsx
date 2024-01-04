import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products.js";
import Helmet from "../components/Helmet/Helmet.js";
import Services from "../services/Services.jsx";
import ProductsList from "../components/UI/ProductsList.jsx";
import Clock from "../components/UI/Clock.jsx";
import { Container, Row, Col } from "reactstrap";
import counterImage from "../assets/images/counter-timer-img.png";
import heroImage from "../assets/images/hero-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredBestSellingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredNewArrivalProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setTrendingProducts(filteredTrendingProducts);

    setBestSellingProducts(filteredBestSellingProducts);

    setNewArrivalProducts(filteredNewArrivalProducts);

    setPopularProducts(filteredPopularProducts);

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
                  Revitalize your space with LuminaLoom, explore sleek furniture
                  that blends form and function, creating a harmonious,
                  clutter-free haven. Elevate your home with sophistication,
                  comfort, and timeless style.
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
            <ProductsList data={trendingProducts}></ProductsList>
          </Row>
        </Container>
      </section>

      <section className="best-sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Best Selling Products</h2>
            </Col>
            <ProductsList data={bestSellingProducts}></ProductsList>
          </Row>
        </Container>
      </section>

      <section className="timer-count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="countdown">
              <div className="clock-top-content">
                <h4 className="text-white fs-6 mb-2">Limited Time Offer</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock></Clock>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy-btn store-btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter-image">
              <img src={counterImage} alt="counterImage" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section-title">New Arrivals</h2>
            </Col>
            <ProductsList data={newArrivalProducts}></ProductsList>
          </Row>
        </Container>
      </section>

      <section className="popular-category">
      <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section-title">Popular In Category</h2>
            </Col>
            <ProductsList data={popularProducts}></ProductsList>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
