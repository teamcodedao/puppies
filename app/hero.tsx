import Image from 'next/image';
import clsx from 'clsx';

import patternImg from './pattern-0.png';
import homeImg from './home.svg';
import puppyImg from './puppy-0.png';
import heroImg from './hero.svg';

export default function Hero() {
  return (
    <div className='relative pt-8'>
      <Image
        src={patternImg}
        alt=''
        fill
        className='opacity-80 mix-blend-hard-light'
      />
      <Image
        src={heroImg}
        alt=''
        className='absolute top-10 w-full object-contain sm:top-20'
      />
      <menu
        className={clsx(
          'relative flex items-center justify-center font-chilanka text-white contain-layout',
          'text-4xl sm:text-[40px]',
          'gap-x-8 sm:gap-x-10 lg:gap-x-16 xl:gap-x-24',
          'max-[487px]:multi-[text-3xl;gap-x-6]'
        )}
      >
        <li className='max-[600px]:hidden'>
          <div className='relative'>
            <Image src={homeImg} priority alt='' />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span>Home</span>
            </div>
          </div>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
            Twitter
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
            Telegram
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_CHART_URL} target='_chart'>
            Chart
          </a>
        </li>
      </menu>

      <h1
        className={clsx(
          'relative text-center text-white',
          'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl',
          'mt-10'
        )}
      >
        COINBASE’S TINY DOG
      </h1>

      <h2
        className={clsx(
          'relative text-center uppercase text-white [-webkit-text-stroke:10px_black] [paint-order:stroke_fill]',
          'mt-10',
          'text-8xl sm:text-9xl'
        )}
      >
        Puppy
      </h2>

      <div className='relative flex justify-center'>
        <Image
          src={puppyImg}
          quality={100}
          priority
          alt=''
          className='max-w-[80%]'
        />
      </div>
    </div>
  );
}
