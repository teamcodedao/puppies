import Image from 'next/image';
import clsx from 'clsx';

import coinImg from './coin.png';
import puppyImg from './puppy-1.png';

export default function Tokenomics() {
  return (
    <div
      className={clsx(
        'box-shadow flex items-center justify-between bg-[rgba(6,56,102,0.60);] text-white',
        'max-w-screen-xl rounded-[51px] border-[5px] border-white',
        'mx-5 xl:mx-auto',
        'gap-x-5 sm:gap-x-10 lg:gap-x-14 xl:gap-x-24',
        'mt-10 px-5 py-6 sm:px-10 lg:px-14 lg:py-10 xl:px-20 xl:py-16',
        'max-[700px]:multi-[`flex-col;gap-y-6;[&>div:first-child]:hidden;[&>h2]:block;[&>footer]:block`]'
      )}
    >
      <div>
        <h2 className='text-center font-nanum-pen text-6xl uppercase lg:text-7xl xl:text-8xl'>
          Tokenomics
        </h2>
        <div className='relative mb-10 mt-8'>
          <Image
            src={coinImg}
            alt=''
            className='aspect-square w-[260px] lg:w-[300px] xl:w-[370px]'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <Image
              src={puppyImg}
              priority
              quality={100}
              alt=''
              className='w-[220px] origin-top rotate-12 object-contain lg:w-[280px] xl:w-[320px]'
            />
          </div>
        </div>
        <footer className='mt-auto text-center text-xl leading-none sm:text-2xl lg:text-3xl xl:text-[32px]'>
          Copyright © 2024 $PUPPY
        </footer>
      </div>
      <h2 className='hidden text-center font-nanum-pen text-6xl uppercase lg:text-7xl xl:text-8xl'>
        Tokenomics
      </h2>
      <div
        className={clsx(
          'shrink-0 grow text-center font-nanum-pen lg:shrink',
          '*:multi-[bg-primary;rounded-[25px];px-10;py-4]',
          'text-4xl leading-none lg:text-5xl xl:text-[57px]',
          'space-y-5 md:space-y-10'
        )}
      >
        <article>
          <h3>TOKEN TICKER</h3>
          <p>$PUPPY</p>
        </article>
        <article>
          <h3>ZERO</h3>
          <p>BUY/ SELL TAXES</p>
        </article>
        <article>
          <h3>LIQUIDITY</h3>
          <p>BURNED</p>
        </article>
      </div>
      <footer className='mt-auto hidden text-center text-xl leading-none sm:text-2xl lg:text-3xl xl:text-[32px]'>
        Copyright © 2024 $PUPPY
      </footer>
    </div>
  );
}
