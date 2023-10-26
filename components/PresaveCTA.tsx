import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Image from "next/image";
import Link from "next/link";

export default function PresaveCTA({ title, image, url }: { title: string; image: CloudinaryImageUrl; url: string }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">'{title}' is coming soon!</h1>
      <div className="relative aspect-square w-full max-w-xs md:w-96 mx-auto mb-8">
        <Image
          src={image.src ?? ""}
          alt={title}
          placeholder="blur"
          blurDataURL={image.blurDataUrl}
          sizes="500px"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex justify-center">
        <Link className="primary-button mr-4" href={url} target="_blank" title={`Presave ${title}`}>
          Pre-Save Now!
        </Link>
      </div>
    </div>
  );
}
