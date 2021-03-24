import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';
import '../App.css';

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
      <div className={MobileNav ? 'MobileNav active' : 'MobileNav'}>
        <Top>
          <Logo>
            <NavItem href='/#landing'>
              <img src={logo} alt='logo' style={{ width: '50px' }} />
            </NavItem>
          </Logo>
          <NavWrap>
            <NavItem href='/#products'>PRODUCTS</NavItem>
            <NavItem href='/#faq'>FAQs</NavItem>
            <NavLink to='/shop'>SHOP</NavLink>
            <NavItem href='/#faq'>TALK TO US</NavItem>
          </NavWrap>
        </Top>
      </div>
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
  height: 80px;
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
const NavLink = styled(Link)`
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
