import Image from "next/image";
import { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

export default function SongCover({
  image,
  alt,
  className
}: {
  image: CloudinaryImageUrl;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-square w-full overflow-hidden ${className}`}>
      <Image
        src={image.src ?? ""}
        alt={alt}
        placeholder="blur"
        blurDataURL={image.blurDataUrl}
        sizes="500px"
        fill
        style={{ objectFit: "contain" }}
        className="hover:scale-110 transition duration-200 cursor-pointer"
      />
    </div>
  );
}
