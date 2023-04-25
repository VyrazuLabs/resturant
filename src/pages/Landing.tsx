import {Image } from '@mantine/core';
import React from 'react';
import landing from '../assets/images/landing.svg';

const Landing = () => {
  return (
    <>
      <Image
        src={landing}
        maw='auto' mx='auto' width="auto" height="auto"  alt='Landing image' 
      />
    </>
  );
}

export default Landing;