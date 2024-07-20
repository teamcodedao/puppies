import Image from 'next/image';

import Hero from './hero';
import Marquee from './marquee';
import Tokenomics from './tokenomics';
import About from './about';

import hashTagImg from './hashtag.svg';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Tokenomics />
      <About />
      <div className='flex justify-center px-5 xl:px-0'>
        <Image src={hashTagImg} alt='' />
      </div>
    </>
  );
}
