import React from 'react';
import styled from 'styled-components';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import test from '../images/test.jpg';
import test2 from '../images/test2.jpg';
import { Dot } from './Global';

const Wrap = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;

  @media only screen and (max-width: 600px) {
    width: 80vw;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 600px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1025px) {
    width: 50vw;
  }
`;
const ImgBox = styled.div`
  text-align: center;
  padding: 1.1rem;
`;

export default function Testimonial() {
  return (
    <>
      <Carousel fade style={{ background: 'rgb(0,0,0,0.3)' }}>
        <Carousel.Item>
          <Wrap>
            <ImgBox>
              <img
                src={test}
                alt='First testimonial'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15rem',
                }}
              />
              <p>
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, pariatur.
                </q>
              </p>

              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p>Salim Semakula</p>
            </ImgBox>
            <ImgBox>
              <img
                src={test}
                alt='second testimonial'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15rem',
                }}
              />
              <p>
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, pariatur.
                </q>
              </p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p>Salim Semakula</p>
            </ImgBox>
            <ImgBox>
              <img
                src={test}
                alt='First slide'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15rem',
                }}
              />
              <p>
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, pariatur.
                </q>
              </p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p>Salim Semakula</p>
            </ImgBox>
          </Wrap>
        </Carousel.Item>
        <Carousel.Item>
          <Wrap>
            <ImgBox>
              <img
                src={test2}
                alt='Fourth testimonial'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15rem',
                }}
              />
              <p>
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, pariatur.
                </q>
              </p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p>Salim Semakula</p>
            </ImgBox>
            <ImgBox>
              <img
                src={test2}
                alt='Fifth testimonial'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15rem',
                }}
              />
              <p>
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, pariatur.
                </q>
              </p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p>Salim Semakula</p>
            </ImgBox>
            <ImgBox>
              <img
                src={test2}
                alt='sixth testimonial'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15rem',
                }}
              />
              <p>
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, pariatur.
                </q>
              </p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p>Salim Semakula</p>
            </ImgBox>
          </Wrap>
        </Carousel.Item>
      </Carousel>
      <section style={{ textAlign: 'center' }}>
        <Dot />
      </section>
    </>
  );
}
