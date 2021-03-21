import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import asha from '../images/aisha.jpg';
import { FaCheckSquare } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi';
import { Dot } from './Global';

const Wrap = styled(Container)`
  //   width: 70vw;
  margin: 5rem auto;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
  @media only screen and (min-width: 600px) {
    width: 90vw;
  }
  @media only screen and (min-width: 1025px) {
    width: 70vw;
  }
`;
const ImgBox = styled.div`
  padding-bottom: 1rem;
  transform-origin: 0 0;
`;
const Info = styled.div``;
const Tick = styled(FaCheckSquare)`
  color: #27af48;
`;
const Talk = styled(GiTalk)`
  color: #27af48;
  font-size: 2rem;
`;
const TalkLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Why() {
  return (
    <>
      <Wrap>
        <Row>
          <Col xs={{ order: 1, span: 12 }} md={{ order: 12, span: 5 }}>
            <ImgBox>
              <img
                src={asha}
                alt='why use our products'
                className='w-100 bg-dark'
              />
            </ImgBox>
          </Col>
          <Col xs={{ order: 12 }} md={{ order: 1, span: 7 }}>
            <Info>
              <h5 className='font-weight-bold'>WHY GEN ORGANICS</h5>
              <p>
                Gen organics products are{' '}
                <span className='font-weight-bold'>
                  100% organic and fit for use on all skin types
                </span>
                , Made from naturally available ingredients for the wellness of
                your skin. With a proper use of a combination or an individual
                product be sure to be amazed by visible results.
              </p>
              <p>
                Gen Shea butter and nourishing soap has been proven to have the
                following benefits:
              </p>
              <p>
                <Tick />
                Cleans & Cares for the skin
              </p>
              <p>
                <Tick />
                Moisturizes & nourishes the skin
              </p>
              <p>
                <Tick />
                Protects against UV rays
              </p>
              <p>
                <Tick />
                Prevents the skin from aging
              </p>

              <TalkLink
                href='https://wa.me/256782442281/?text=Gen Organics'
                target='_blank'
                rel='noopener noreferrer'
                title='Talk to our specialist'
              >
                <h5 className='font-weight-bold pt-5'>
                  <Talk />
                  &nbsp;Talk to our specialist
                </h5>
              </TalkLink>
            </Info>
          </Col>
        </Row>
      </Wrap>
      <section style={{ textAlign: 'center' }}>
        <Dot />
      </section>
    </>
  );
}
