import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";
import type { ImageProps } from "next/legacy/image";

import BlurImage from "./BlurImage";

export default function BackgroundImage({
  image,
  quality
}: {
  image: CloudinaryImageUrl;
  quality?: ImageProps["quality"];
}) {
  return (
    <div className="-z-10 fixed w-full h-full top-0 left-0">
      <BlurImage
        alt="Copyright 2023 © Arnout Jansen"
        src={image.src ?? ""}
        blurDataURL={image.blurDataUrl}
        quality={quality ?? 50}
        sizes="100vw"
        priority
      />
    </div>
  );
}
