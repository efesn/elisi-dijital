import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import SuccessStories from '../components/SuccessStories';
import HowItWorks from '../components/HowItWorks';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <SuccessStories />
      <CallToAction />
    </div>
  );
};

export default HomePage;