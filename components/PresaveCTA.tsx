import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Image from "next/image";
import Link from "next/link";
import SongCover from "./SongCover";

export default function PresaveCTA({ title, image, url }: { title: string; image: CloudinaryImageUrl; url: string }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">'{title}' is coming soon!</h1>
      <SongCover image={image} alt={title} className="max-w-xs w-64 md:w-96 mx-auto mb-8" />
      <div className="flex justify-center">
        <Link className="primary-button mr-4" href={url} target="_blank" title={`Presave ${title}`}>
          Pre-Save Now!
        </Link>
      </div>
    </div>
  );
}
