import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ShopBtn, BtnBox } from './Global';

const Wrap = styled(Container)`
  width: 30vw;
  margin: 10rem auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;

export default function Subscribe() {
  //Form validation
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
      <Wrap>
        {success && <p style={{ color: 'green' }}>Subscribed!</p>}

        <p>Receive insights and news about Gen Organics</p>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name='anj_news'
          method='POST'
          data-netlify='true'
          action='/?success=true'
          id='form_js_news'
          autoComplete='off'
        >
          <input type='hidden' name='form-name' value='anj_news' />
          <Form.Row>
            <Form.Group
              as={Col}
              // md='7'
              controlId='validationCustom019'
              style={{ background: '#fff' }}
            >
              <Form.Control
                type='email'
                placeholder='Enter your email'
                required
                name='email'
              />

              <Form.Control.Feedback type='invalid'>
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <BtnBox>
            <ShopBtn type='submit'>
              <small>Subcribe</small>
            </ShopBtn>
          </BtnBox>
        </Form>
      </Wrap>
    </>
  );
}
