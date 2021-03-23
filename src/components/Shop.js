import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import monitor from '../images/monitor.jpg';
import logo from '../images/logo.png';

export default function Shop() {
  // form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // success
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <>
      <FormBox>
        <Row>
          <Col md={6}>
            <FormInfo>
              <Link to='/'>
                <img
                  src={logo}
                  alt='agent'
                  style={{ width: '3rem', height: '3rem' }}
                />
              </Link>
              &nbsp;
              <span style={{ fontWeight: 'bold' }}>Gen Organics</span>
              <br />
              <p style={{ paddingTop: '1rem' }}>
                Gen organic care products are available from our official
                retailers and other shops country wide. Make a purchase from
                your preferred outlet or alternatively buy straight from us.
              </p>
              <p>
                <img src={monitor} alt='agent' className='bg-dark' />
              </p>
              <p>
                <img src={monitor} alt='agent' className='bg-dark' />
              </p>
              <p>
                <img src={monitor} alt='agent' className='bg-dark' />
              </p>
            </FormInfo>
          </Col>
          <Col md={6}>
            <FormWrap>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                name='organics'
                method='POST'
                data-netlify='true'
                action='/shop/?success=true'
                id='form_js'
                autoComplete='off'
                style={{ padding: '3rem 0 2rem 0' }}
              >
                <FormTitle>
                  <p>PLACE AN ORDER:</p>
                </FormTitle>
                {success && (
                  <p style={{ color: 'green' }}>
                    Successfully submitted Order!
                  </p>
                )}

                <input type='hidden' name='form-name' value='organics' />
                <Form.Row>
                  <Form.Group as={Col} md='12' controlId='validationCustom01'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Your name'
                      required
                      name='name'
                    />

                    <Form.Control.Feedback type='invalid'>
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md='12' controlId='validationCustom01'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Your email'
                      required
                      name='email'
                    />

                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md='12' controlId='validationCustom01'>
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control
                      type='tel'
                      placeholder='Your number'
                      required
                      name='phone'
                      pattern='[0-9]{4}[0-9]{3}[0-9]{3}'
                    />

                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid phone number eg. &nbsp; 0782442281
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md='12' controlId='validationCustom01'>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                      as='textarea'
                      placeholder='Type message here...'
                      required
                      name='message'
                    />

                    <Form.Control.Feedback type='invalid'>
                      Please type your message
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md={12} controlId='validationCustom01'>
                    <Form.Label>Products</Form.Label>
                    <Form.Control as='select' defaultValue='Soap' name='pdt'>
                      <option>Soap</option>
                      <option>Jerry</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <FormBtn type='submit'>
                  <small>Submit</small>
                </FormBtn>
              </Form>
            </FormWrap>
          </Col>
        </Row>
      </FormBox>
    </>
  );
}

// styling
const FormWrap = styled.div`
  margin: 0 0 0 0;
  @media screen and (max-width: 568px) {
    margin: 1rem 0 0 0;
  }
`;
const FormTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 0.7rem;
`;
const FormBox = styled(Container)`
  width: 70vw;
  display: flex;
  padding: 5rem 0;

  @media screen and (max-width: 568px) {
    width: 90vw;
    padding: 5rem 0;
  }
  @media screen and (min-width: 1024px) {
    width: 80vw;
  }
  @media screen and (min-width: 1366px) {
    width: 70vw;
    padding: 5rem 0;
  }
  @media screen and (min-width: 1500px) {
    width: 60vw;
  }
`;
const FormInfo = styled.div`
  margin: 2.5rem 5vw 0 0;
`;
const FormBtn = styled(Button)`
  background: #27af48;
  border: none;
  border-radius: 2rem;
  padding: 0.3rem 2rem;
  &:hover {
    background: rgb(0, 0, 0, 0.4);
    color: #fff;
  }
`;
