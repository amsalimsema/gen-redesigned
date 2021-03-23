import React from 'react';
import Faq from './Faq';
import Landing from './Landing';
import Make from './Make';
import Product from './Product';
import Subscribe from './Subscribe';
import Testimonial from './Testimonial';
import Why from './Why';

export default function Home() {
  return (
    <>
      <div id='landing'>
        <Landing />
      </div>
      <Why />
      <div id='products'>
        <Product />
      </div>
      <Make />
      <Testimonial />
      <div id='faq'>
        <Faq />
      </div>
      <Subscribe />
    </>
  );
}
