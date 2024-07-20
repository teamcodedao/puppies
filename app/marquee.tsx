import Image from 'next/image';
import clsx from 'clsx';
import BaseMarquee from 'react-fast-marquee';

import coinImg from './coin.png';

export default function Marquee() {
  return (
    <div className='bg-linear'>
      <BaseMarquee autoFill>
        <div
          className={clsx(
            'flex items-center gap-7 text-white',
            'mx-5 text-3xl sm:mx-10 sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px]',
            'py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7'
          )}
        >
          <Image
            src={coinImg}
            priority
            alt=''
            className='w-16 object-contain sm:size-[86px]'
          />
          <span className='[-webkit-text-stroke:1px_black]'>PUPPY</span>
        </div>
      </BaseMarquee>
    </div>
  );
}
