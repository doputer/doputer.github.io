import Image from 'next/image';

type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  src?: string;
};

function img(props: Omit<ImageProps, 'alt'>) {
  return (
    <Image
      className="m-auto my-4 h-auto w-fit"
      width={0}
      height={0}
      sizes="100vw"
      loading="eager"
      src={props.src as string}
      alt=""
      {...props}
    />
  );
}

export default img;
