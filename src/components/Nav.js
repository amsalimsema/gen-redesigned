import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';
import Faq from './Faq';
import Footer from './Footer';
import Landing from './Landing';
import Make from './Make';
import Product from './Product';
import Testimonial from './Testimonial';
import Why from './Why';

export default function Nav() {
  // change bg
  const [MobileNav, setMobileNav] = useState(false);
  const changebackground = () => {
    if (window.scrollY >= 80) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };
  window.addEventListener('scroll', changebackground);
  return (
    <>
      <Top className={MobileNav ? 'MobileNav active' : 'MobileNav'}>
        <Logo>
          <Link to='/'>
            <img src={logo} alt='logo' style={{ width: '50px' }} />
          </Link>
        </Logo>
        <NavWrap>
          <NavItem href='/#products'>PRODUCTS</NavItem>
          <NavItem href='/#faq'>FAQs</NavItem>
          <NavItem href='/fgg'>SHOP</NavItem>
          <NavItem href='/#faq'>TALK TO US</NavItem>
        </NavWrap>
      </Top>
      <Landing />
      <Why />
      <div id='products'>
        <Product />
      </div>
      <Make />
      <Testimonial />
      <div id='faq'>
        <Faq />
        <Footer />
      </div>
    </>
  );
}

// navigation
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
`;
const Top = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
`;
const NavWrap = styled.div`
  margin: 0.5rem auto;
  border-bottom: 0.1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled.a`
  font-size: 0.7rem;
  color: #fff;
  margin: 0.5rem 0.5rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;
