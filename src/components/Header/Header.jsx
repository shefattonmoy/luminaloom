import React from 'react';
import './Header.css';
import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/user-icon.png';

const navLink = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
            <div>
              <h1>LuminaLoom</h1>
            </div>
          </div>

          <div className="navigation">
            <ul className="menu">
              {
                navLink.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} 
                    className={(navClass) => navClass.isActive ? 'nav-active' : ''}>
                      {item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav-icons">
            <span className='fav-icon'>
              <i class="ri-heart-line"></i>
              <span className='badge'>1</span>
              </span>
            <span className='cart-icon'>
              <i class="ri-shopping-bag-line"></i>
              <span className='badge'>1</span>
              </span>
            <span><motion.img whileTap={{scale:1.2}} src={userImg} alt="" /></span>
          </div>

          <div className="mobile-menu">
            <span><i class="ri-menu-line"></i></span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
};

export default Header;