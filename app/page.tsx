import Image from 'next/image';

import Hero from './hero';
import Marquee from './marquee';
import Tokenomics from './tokenomics';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Tokenomics />
    </>
  );
}
