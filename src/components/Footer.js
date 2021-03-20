import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import { AiFillInstagram, AiFillHeart } from 'react-icons/ai';
import {
  RiFacebookFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiMessengerFill,
} from 'react-icons/ri';

const Main = styled(Container)`
  background: #27af48;
`;
const FooterCopy = styled(Container)`
  text-align: center;
  color: #fff;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  width: 70vw;
  padding-top: 2rem;

  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;
const FooterWrap = styled(Container)`
  width: 70vw;
  padding-top: 2rem;
  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;
const Chat = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fff;
  padding: 0 3rem 1rem 0;
`;
const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export default function Footer() {
  return (
    <>
      <Main fluid>
        <FooterWrap>
          <Row>
            <Col md={6}>
              {' '}
              <Chat>
                <div style={{ display: 'flex' }}>
                  <a
                    href='https://wa.me/256782442281/?text=Hi there, Whatsup'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='WhatsApp'
                  >
                    <RiWhatsappFill
                      style={{ color: '#fff', fontSize: '2rem' }}
                    />
                  </a>

                  <p style={{ fontSize: '0.6rem' }}>
                    CHAT VIA
                    <br /> <span>WHATSAPP</span>
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    paddingLeft: '1rem',
                  }}
                >
                  <a
                    href='https://m.me/semakula.salim.9'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Messenger'
                  >
                    <RiMessengerFill
                      style={{ color: '#fff', fontSize: '2rem' }}
                    />
                  </a>

                  <p style={{ fontSize: '0.6rem' }}>
                    CHAT VIA
                    <br />
                    <span>FACEBOOK MESSENGER</span>
                  </p>
                </div>
              </Chat>
            </Col>
            <Col md={6}>
              <Social>
                <a
                  href='https://behance.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Instagram'
                >
                  <AiFillInstagram
                    style={{ color: '#fff', fontSize: '1.6rem' }}
                  />
                </a>

                <a
                  href='https://behance.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Facebook'
                >
                  <RiFacebookFill
                    style={{ color: '#fff', fontSize: '1.6rem' }}
                  />
                </a>

                <a
                  href='https://behance.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Twitter'
                >
                  <RiTwitterFill
                    style={{ color: '#fff', fontSize: '1.6rem' }}
                  />
                </a>
              </Social>
            </Col>
          </Row>
        </FooterWrap>
        <FooterCopy>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} alt='logo' style={{ width: '50px' }} />
            <p>
              Made in Uganda With{' '}
              <span>
                <AiFillHeart />
              </span>
            </p>
          </div>
          &copy;{new Date().getFullYear()}&nbsp;Gen Organics.&nbsp;All Rights
          Reserved
        </FooterCopy>
      </Main>
    </>
  );
}
