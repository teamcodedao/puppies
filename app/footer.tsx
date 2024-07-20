import Image from 'next/image';
import clsx from 'clsx';

import Social from './social';

import coinImg from './coin.png';
import puppy2 from './puppy-2.png';

export default function Footer() {
  return (
    <footer className='relative mb-16 mt-20 contain-layout lg:mb-24'>
      <Image
        src={puppy2}
        alt=''
        className='absolute -bottom-36 left-1/2 -translate-x-1/2 rotate-[22deg]'
      />
      <h2
        className={clsx(
          'relative text-center text-white',
          'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl',
          'mt-10'
        )}
      >
        COINBASE’S TINY DOG
      </h2>

      <h3
        className={clsx(
          'relative z-10 text-center uppercase text-white [-webkit-text-stroke:10px_black] [paint-order:stroke_fill]',
          'mt-10',
          'text-7xl sm:text-8xl'
        )}
      >
        Puppy
      </h3>

      <div className='relative z-0 mx-5 max-w-screen-xl xl:mx-auto'>
        <div className='-mt-20 flex -rotate-3 justify-between px-5 sm:px-14 [&_img]:multi-[inline-block;w-[140px];rotate-[16deg]] sm:[&_img]:w-[201px]'>
          <Image src={coinImg} alt='' />
          <Image src={coinImg} alt='' />
        </div>
        <div className='mt-10 flex flex-wrap justify-between gap-5 *:multi-[space-y-5] max-[660px]:multi-[`[&>div]:w-full;[&_a]:w-full`] lg:mt-20'>
          <div>
            <Social
              href={process.env.NEXT_PUBLIC_TWITTER_URL}
              target='_x'
              image='/x.png'
              title='Twitter'
              className='[&_img]:mix-blend-exclusion'
            />
            <Social
              href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
              target='_tele'
              image='/tele.png'
              title='telegram'
              className='[&_img]:mix-blend-exclusion'
            />
          </div>
          <div>
            <Social
              href={process.env.NEXT_PUBLIC_DEXS_URL}
              target='_dexs'
              image='/dexs.png'
              title='DexScreener'
            />
            <Social
              href={process.env.NEXT_PUBLIC_DEX_URL}
              target='_dex'
              image='/dex.png'
              title='Dextool'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
