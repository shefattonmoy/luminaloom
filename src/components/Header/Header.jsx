import React, {useRef, useEffect} from 'react';
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
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      {
        headerRef.current.classList.add('sticky-header');
      }
      else
      {
        headerRef.current.classList.remove('sticky-header');
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunction()

    return () => window.removeEventListener('scroll', stickyHeaderFunction)
  });

  const menuToggle = () => menuRef.current.classList.toggle('active-menu')

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
            <div>
              <h1>LuminaLoom</h1>
            </div>
          </div>

          <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
            <div className="mobile-menu">
            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
          </div>
          </div>
        </div>
      </Row>
    </Container>
  </header>
};

export default Header;