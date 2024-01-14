import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Link from "next/link";
import SongCover from "./SongCover";

export default function ReleaseCTA({
  title,
  image,
  url,
  hasSmallTitle
}: {
  title: string;
  image: CloudinaryImageUrl;
  url: string;
  hasSmallTitle?: boolean;
}) {
  const titleClass = hasSmallTitle ? "text-2xl md:text-4xl" : "text-4xl md:text-5xl";
  return (
    <div className="text-center">
      <h1 className={`${titleClass} font-extrabold mb-8`}>{title}</h1>
      <Link href={url} target="_blank" title={`Listen to ${title}`}>
        <SongCover image={image} alt={title} className="max-w-xs w-64 md:w-96 mx-auto mb-8" />
      </Link>
      <div className="flex justify-center">
        <Link className="primary-button" href={url} target="_blank" title={`Listen to ${title}`}>
          Listen
        </Link>
      </div>
    </div>
  );
}
