import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

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
      <Top>
        <div className={MobileNav ? 'MobileNav active' : 'MobileNav'}>
          <Logo>
            <Link to='/'>
              <img src={logo} alt='logo' style={{ width: '50px' }} />
            </Link>
          </Logo>
          <NavWrap>
            <NavItem href='/#products'>PRODUCTS</NavItem>
            <NavItem href='/#faq'>FAQs</NavItem>
            <NavItem href='/shop'>SHOP</NavItem>
            <NavItem href='/#contact'>TALK TO US</NavItem>
          </NavWrap>
        </div>
      </Top>
    </>
  );
}

// navigation
const Logo = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0.3rem;
`;
const Top = styled.div`
  background: rgb(0, 0, 0, 0.3);
  position: fixed;
  width: 100vw;
  z-index: 1000;
  height: 100px;
`;
const NavWrap = styled.div`
  margin: 0.5rem auto;
  border-bottom: 0.1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
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
