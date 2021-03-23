import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

const FaqWrap = styled(Container)`
  width: 75vw;
  @media only screen and (max-width: 600px) {
    width: 90vw;
    padding-top: 100px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 100px;
  }
`;
const Title = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;
const Info = styled.div`
  padding-top: 1.2rem;
  font-size: 0.9rem;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export default function Faq() {
  const [key, setKey] = useState('general');

  return (
    <FaqWrap>
      <Title>
        <p>FAQ</p>
        <h4>Have any questions?</h4>
      </Title>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey='general' title='GENERAL'>
          <Info>
            <section>
              <p style={{ fontWeight: 'bold' }}>
                What is your delivery policy?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt rem officiis expedita culpa perspiciatis ipsum quae
                facere quasi! Rerum, cupiditate!
              </p>
            </section>
            <section>
              <p style={{ fontWeight: 'bold' }}>
                What is your delivery policy?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt rem officiis expedita culpa perspiciatis ipsum quae
                facere quasi! Rerum, cupiditate!
              </p>
            </section>
          </Info>
        </Tab>
        <Tab eventKey='payments' title='PAYMENTS'>
          <Info>
            <section>
              <p style={{ fontWeight: 'bold' }}>
                What is your delivery policy?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt rem officiis expedita culpa perspiciatis ipsum quae
                facere quasi! Rerum, cupiditate!
              </p>
            </section>
            <section>
              <p style={{ fontWeight: 'bold' }}>
                What is your delivery policy?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt rem officiis expedita culpa perspiciatis ipsum quae
                facere quasi! Rerum, cupiditate!
              </p>
            </section>
          </Info>
        </Tab>
        <Tab eventKey='delivery' title='DELIVERY'>
          <Info>
            <section>
              <p style={{ fontWeight: 'bold' }}>
                What is your delivery policy?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt rem officiis expedita culpa perspiciatis ipsum quae
                facere quasi! Rerum, cupiditate!
              </p>
            </section>
            <section>
              <p style={{ fontWeight: 'bold' }}>
                What is your delivery policy?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt rem officiis expedita culpa perspiciatis ipsum quae
                facere quasi! Rerum, cupiditate!
              </p>
            </section>
          </Info>
        </Tab>
      </Tabs>
    </FaqWrap>
  );
}
