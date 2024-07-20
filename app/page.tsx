import Image from 'next/image';

import Hero from './hero';
import Marquee from './marquee';
import Tokenomics from './tokenomics';
import About from './about';
import Footer from './footer';

import hashTagImg from './hashtag.svg';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Tokenomics />
      <About />
      <div className='mt-10 flex justify-center px-5 lg:mt-0 xl:px-0'>
        <Image src={hashTagImg} alt='' />
      </div>
      <Footer />
    </>
  );
}
