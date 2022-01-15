import NextImage from "next/image";

export default function Image({ className, width, height, alt, src }) {
  return (
    <div className={`flex ${className}`}>
      <NextImage width={width} height={height} className={"absolute"} src={src} alt={alt} />
    </div>
  );
}