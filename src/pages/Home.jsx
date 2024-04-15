import React from 'react'
import Header from '../components/Header';
import Slider from '../components/Slider';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import SectionC from '../components/SectionC';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

function Home() {
  return (
    <>
    <Header />
    <Slider />
    <SectionA />
    <SectionB />
    <SectionC />
    <Footer />
    <Copyright />
  </>
  )
}

export default Home