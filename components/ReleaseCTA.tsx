import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Link from "next/link";
import SongCover from "./SongCover";

export default function ReleaseCTA({ title, image, url }: { title: string; image: CloudinaryImageUrl; url: string }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">'{title}' is out now!</h1>
      <SongCover image={image} alt={title} className="max-w-xs w-64 md:w-96 mx-auto mb-8" />
      <div className="flex justify-center">
        <Link className="primary-button" href={url} target="_blank" title={`Listen to ${title}`}>
          Listen
        </Link>
      </div>
    </div>
  );
}
