import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';
import '../App.css';
import { motion } from 'framer-motion';

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
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: 'tween',
              duration: '2',
              delay: '1',
            }}
          >
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
          </motion.div>
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
    color: green;
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
    color: green;
    text-decoration: none;
  }
`;
