import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import Faq from './Faq';
import Footer from './Footer';
import Landing from './Landing';
import Product from './Product';

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
          <img src={logo} alt='logo' style={{ width: '50px' }} />
        </Logo>
        <NavWrap>
          <NavItem href='#'>PRODUCTS</NavItem>
          <NavItem href='#'>HOW TO USE</NavItem>
          <NavItem href='#'>SHOP</NavItem>
          <NavItem href='#'>TALK TO US</NavItem>
        </NavWrap>
      </Top>
      <Landing />

      <Product />
      <Faq />
      <Footer />
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
