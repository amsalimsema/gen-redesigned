import React from 'react';
import styled from 'styled-components';

import HomeHero from '../images/HomeHero.jpg';
//import HomeMob from '../images/HomeMob.jpg';

const LandingBg = styled.div`
  background-color: rgb(0, 0, 0, 0.3);
  background-image: url(${HomeHero});
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Landing() {
  return (
    <>
      <LandingBg />
    </>
  );
}
