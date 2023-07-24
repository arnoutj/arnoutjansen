import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function BlurImage({ src, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      fill
      className={`object-cover duration-1000 ease-in-out', ${
        isLoading ? "grayscale blur-2xl scale-105 opacity-0" : "grayscale-0 blur-0 scale-100 opacity-1"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
