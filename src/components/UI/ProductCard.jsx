import React from "react";
import "../../styles/ProductCard.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
  return (
    <Col lg="3" md="4">
      <div className="product-item">
        <div className="product-image">
          <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="productImage" />
        </div>
        <div className="p-2 product-info">
          <h3 className="product-name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
          <span>{item.category}</span>
        </div>
        <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <span>
          <motion.i whileTap={{scale: 1.2}} class="ri-add-line"></motion.i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
