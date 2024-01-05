import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import '../styles/Shop.css';
import Helmet from "../components/Helmet/Helmet";
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter = (event) => {
    const filterValue = event.target.value;

    if(filterValue === 'sofa')
    {
      const filteredProducts = products.filter(item => item.category === 'sofa')
      setProductsData(filteredProducts);
    }

    if(filterValue === 'chair')
    {
      const filteredProducts = products.filter(item => item.category === 'chair')
      setProductsData(filteredProducts);
    }
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }
  return (
    <Helmet title="Shop">
      <CommonSection title="Products"></CommonSection>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter-widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Trending Products</option>
                  <option value="chair">Best Selling Products</option>
                  <option value="chair">New Arrivals</option>
                  <option value="sofa">Popular Products</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className="text-end">
            <div className="filter-widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search-bar">
                <input type="text" placeholder="Search Items" onChange={handleSearch}/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1 className="text-center fs-4">No products are found!</h1> : 
              <ProductsList data={productsData}></ProductsList>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
