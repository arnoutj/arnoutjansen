import Image, { ImageProps } from "next/legacy/image";
import { useState } from "react";

export default function BlurImage({ src, blurDataURL, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      objectFit="cover"
      placeholder="blur"
      layout="fill"
      blurDataURL={blurDataURL}
      className={`object-cover duration-1000 ease-in-out ${
        isLoading ? "grayscale blur-2xl scale-105" : "grayscale-0 blur-0 scale-100"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
