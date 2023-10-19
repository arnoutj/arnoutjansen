import type { CloudinaryImage } from "utils/getCloudinaryImage";
import BlurImage from "./BlurImage";

export default function BackgroundImage({ image }: { image: CloudinaryImage }) {
  return (
    <div className="-z-10 fixed w-full h-full top-0 left-0">
      <BlurImage
        alt="Copyright 2023 © Arnout Jansen"
        src={image.src ?? ""}
        blurDataURL={image.blurDataUrl}
        quality={50}
        sizes="100vw"
        priority
      />
    </div>
  );
}
