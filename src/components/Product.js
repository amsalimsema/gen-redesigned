import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiCheckCircle } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import pdt from '../images/product.png';
import logo from '../images/logomono.png';
import { BtnBox, Dot, ShopBtn } from './Global';

const Wrap = styled(Container)`
  //   background: rgb(0, 0, 0, 0.3);
  width: 80vw;
  position: relative;
  @media only screen and (min-width: 1025px) {
    width: 70vw;
  }
`;
const WrapInner = styled.div`
  //   @media only screen and (max-width: 600px) {
  //     position: absolute;
  //     top: 8%;
  //     transform: translateY(8%);
  //   }
  //   @media only screen and (min-width: 601px) {
  //     position: absolute;
  //     top: 20%;
  //     transform: translateY(20%);
  //   }
`;
const ImgOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ImgTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;
const Title = styled.div`
  line-height: 0.9rem;
  font-weight: bold;
`;
const TitleTwo = styled.div`
  line-height: 0.9rem;
  font-weight: bold;
  @media only screen and (min-width: 600px) {
    text-align: center;
  }
`;
const Info = styled.div`
  font-size: 0.95rem;
`;
const InfoWrap = styled.div`
  margin-top: 0rem;
  @media only screen and (max-width: 600px) {
    margin-top: 2rem;
  }
`;

export default function Product() {
  return (
    <>
      <Wrap>
        <WrapInner>
          <div className='py-5 text-center'>
            <img src={logo} alt='logo' style={{ width: '50px' }} />
            <h3>100% organic</h3>
            <BsStarFill style={{ color: '#27af48' }} />
            <BsStarFill style={{ color: '#27af48' }} />
            <BsStarFill style={{ color: '#27af48' }} />
            <BsStarFill style={{ color: '#27af48' }} />
            <BsStarFill style={{ color: '#27af48' }} />
          </div>
          <Row className='no-gutters'>
            <Col md={5}>
              <Title>
                <p>Gen Shea Butter Creme</p>
              </Title>
              <ImgOne>
                <img src={pdt} alt='product' />
              </ImgOne>
            </Col>
            <Col md={7}>
              <InfoWrap>
                <Title>
                  <p>How to use:</p>
                </Title>
                <Info>
                  <p>
                    <span>
                      <BiCheckCircle style={{ color: '#27af48' }} />
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Corporis deleniti tempora consequatur nulla vero nihil
                    harum maxime dignissimos quia labore.
                  </p>
                  <p>
                    <span>
                      <BiCheckCircle style={{ color: '#27af48' }} />
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Corporis deleniti tempora consequatur nulla vero nihil
                    harum maxime dignissimos quia labore.
                  </p>
                  <p>
                    <span>
                      <BiCheckCircle style={{ color: '#27af48' }} />
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Corporis deleniti tempora consequatur nulla vero nihil
                    harum maxime dignissimos quia labore.
                  </p>
                </Info>
                <Title>
                  <p>Ingredients:</p>
                </Title>
                <Info>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis deleniti tempora consequatur nulla vero nihil harum
                    maxime dignissimos quia labore.
                  </p>
                </Info>
                <Title> Available in 250g and 350g</Title>
                <BtnBox>
                  <ShopBtn>
                    <small>Buy</small>
                  </ShopBtn>
                </BtnBox>
              </InfoWrap>
            </Col>
          </Row>
          <section style={{ textAlign: 'center' }}>
            <Dot />
          </section>

          {/* end of first row */}
          {/* second row */}
          <Row className='no-gutters'>
            <Col xs={{ order: 12, span: 12 }} md={{ order: 1, span: 7 }}>
              <InfoWrap>
                <Title>
                  <p>How to use:</p>
                </Title>
                <Info>
                  <p>
                    <span>
                      <BiCheckCircle style={{ color: '#27af48' }} />
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Corporis deleniti tempora consequatur nulla vero nihil
                    harum maxime dignissimos quia labore.
                  </p>
                  <p>
                    <span>
                      <BiCheckCircle style={{ color: '#27af48' }} />
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Corporis deleniti tempora consequatur nulla vero nihil
                    harum maxime dignissimos quia labore.
                  </p>
                  <p>
                    <span>
                      <BiCheckCircle style={{ color: '#27af48' }} />
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Corporis deleniti tempora consequatur nulla vero nihil
                    harum maxime dignissimos quia labore.
                  </p>
                </Info>
                <Title>
                  <p>Ingredients:</p>
                </Title>
                <Info>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis deleniti tempora consequatur nulla vero nihil harum
                    maxime dignissimos quia labore.
                  </p>
                </Info>
                <Title> Available in 250g and 350g</Title>
                <BtnBox>
                  <ShopBtn>
                    <small>Buy</small>
                  </ShopBtn>
                </BtnBox>
              </InfoWrap>
            </Col>
            <Col xs={{ order: 1 }} md={{ order: 12, span: 5 }}>
              <TitleTwo>
                <p>Gen Shea Butter Creme</p>
              </TitleTwo>
              <ImgTwo>
                <img src={pdt} alt='product' />
              </ImgTwo>
            </Col>
          </Row>
          <section style={{ textAlign: 'center' }}>
            <Dot />
          </section>
          {/* end of second row*/}
        </WrapInner>
      </Wrap>
    </>
  );
}
