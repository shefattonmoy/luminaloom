import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/Checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"></CommonSection>

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing-form">
                <FormGroup className="form-group">
                  <input type="text" placeholder="Your Name" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="email" placeholder="Your Email" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="number" placeholder="Your Contact No." />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="number" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout-cart">
                <h6>
                  Total Quantity: <span>{totalQuantity} item(s)</span>
                </h6>
                <h6>
                  Subtotal: <span>$100</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    Free Shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="checkout-btn auth-btn w-100">Place Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
