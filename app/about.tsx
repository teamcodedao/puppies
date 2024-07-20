import Image from 'next/image';
import clsx from 'clsx';

import aboutImg from './about.png';

export default function About() {
  return (
    <div
      className={clsx(
        'box-shadow relative mt-20 bg-[rgba(6,56,102,0.60);] text-white',
        'max-w-screen-xl rounded-[51px] border-[5px] border-white',
        'mx-5 xl:mx-auto',
        'px-8 pb-14 pt-10 sm:multi-[px-12;pb-20;pt-14]'
      )}
    >
      <Image
        src={aboutImg}
        alt=''
        className='absolute right-0 top-0 xl:right-40'
      />
      <h2 className='relative text-center text-4xl uppercase leading-none sm:text-5xl lg:text-6xl xl:text-[64px]'>
        About Puppy
      </h2>
      <p className='relative mt-8 text-2xl !leading-[3rem] sm:mt-12 sm:text-3xl xl:multi-[text-[34px];!leading-[4rem]]'>
        Puppy - Coinbase&apos;s tiny dog, the image of Puppy has been shared on
        the official Coinbase account. In fact, on Coinbase&apos;s Instagram,
        they have shared three images of their pets: two dogs and one cat.
        Puppy, Coinbase&apos;s tiny dog, Jogeco, Coinbase&apos;s dog, and
        Miggles, Coinbase&apos;s cat. Puppy was shared on Coinbase&apos;s
        Instagram in February 2015 and has become Coinbase&apos;s only tiny dog.
      </p>
    </div>
  );
}
