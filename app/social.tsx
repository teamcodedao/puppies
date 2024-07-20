import clsx from 'clsx';

interface SocialProps extends React.ComponentProps<'a'> {
  image: string;
}

export default function Social({
  className,
  image,
  title,
  ...restProps
}: SocialProps) {
  return (
    <a
      {...restProps}
      className={clsx(
        className,
        'flex items-center rounded-[14px] border-4 border-primary bg-[#D9D9D9] font-nanum-pen text-secondary transition [-webkit-text-stroke:1px_var(--primary-color)]',
        'text-[57px] leading-none',
        'p-3',
        'gap-x-4',
        'hover:multi-[bg-primary;text-white;border-secondary]'
      )}
    >
      <img src={image} alt='' className='h-[60px] object-contain' />
      <span>{title}</span>
    </a>
  );
}
