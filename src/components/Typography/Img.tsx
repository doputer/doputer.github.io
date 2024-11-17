import Image, { type ImageProps } from 'next/image';

function img(props: ImageProps) {
  const isUnpotimized = /.gif$/.test(props.src as string);

  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      loading="eager"
      {...props}
      alt=""
      unoptimized={isUnpotimized}
    />
  );
}

export default img;
