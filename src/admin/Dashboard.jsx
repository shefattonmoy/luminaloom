import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from '../customHooks/useGetData.js';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const {products} = useGetData('products');
  const {users} = useGetData('users');
  
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="revenue-box">
                <h5>Total Sales</h5>
                <span>$1572560</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="order-box">
                <h5>Total Orders</h5>
                <span>2564</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="product-box">
                <h5>Total Products</h5>
                <span>850</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="user-box">
                <h5>Total Users</h5>
                <span>1265</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
