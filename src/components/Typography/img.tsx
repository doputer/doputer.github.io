import Image from 'next/image';

type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  src?: string;
};

function img(props: Omit<ImageProps, 'alt'>) {
  return (
    <Image
      className="m-auto my-4 h-auto w-fit max-w-screen-xs"
      width={0}
      height={0}
      sizes="100vw"
      loading="eager"
      src={props.src as string}
      alt=""
      unoptimized={/.gif$/.test(props.src as string)}
      {...props}
    />
  );
}

export default img;
