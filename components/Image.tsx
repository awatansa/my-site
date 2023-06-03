import NextImage from "next/image";

interface ImageProps {
  className?: string;
  width: number;
  height: number;
  alt: string;
  src: string;
}

export default function Image({ className, width, height, alt, src }: ImageProps) {
  return (
    <div className={`flex ${className}`}>
      <NextImage width={width} height={height} className={"absolute"} src={src} alt={alt} />
    </div>
  );
}
