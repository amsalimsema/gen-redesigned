import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { GoPrimitiveDot } from 'react-icons/go';

const Circle = styled(GoPrimitiveDot)`
  color: #fff;
  width: 3.5rem;
  height: 3.5rem;
`;
const Wrap = styled.div`
  background: #27af48;
`;
const WrapInner = styled(Container)`
  width: 70vw;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;
const Info = styled.div`
  text-align: center;
  padding: 1rem;
  color: #fff;
  > .info {
    font-size: 0.85rem;
  }
`;
const Title = styled.div`
  text-align: center;
`;

export default function Make() {
  return (
    <>
      <Title>
        <small>INGREDIENTS</small>
        <p className='font-weight-bold'>100% natural composition</p>
      </Title>
      <Wrap>
        <WrapInner>
          <Row className='no-gutters'>
            <Col md={3}>
              <Info>
                <Circle />
                <p className='font-weight-bold'>Hyaluronic Acid</p>
                <p className='info'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </Info>
            </Col>
            <Col md={3}>
              <Info>
                <Circle />
                <p className='font-weight-bold'>Melissa Mint</p>
                <p className='info'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </Info>
            </Col>
            <Col md={3}>
              <Info>
                <Circle />
                <p className='font-weight-bold'>Algea Powder</p>
                <p className='info'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </Info>
            </Col>
            <Col md={3}>
              <Info>
                <Circle />
                <p className='font-weight-bold'>Saponaria Pumilla</p>
                <p className='info'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </Info>
            </Col>
          </Row>
        </WrapInner>
      </Wrap>
    </>
  );
}
