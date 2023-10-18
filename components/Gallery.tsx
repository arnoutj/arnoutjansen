import type { ImageProps } from "utils/types";
import Image from "next/image";

export type GalleryImage = {
  filename: string;
  twoColspan?: boolean;
  image: ImageProps;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map(({ image: { blurDataUrl, public_id, format }, twoColspan }) => (
        <div key={public_id} className={`flex align-center justify-end ${twoColspan ? "md:col-span-2" : ""}`}>
          <Image
            alt="© Arnout Jansen"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_768/${public_id}.${format}`}
            width={768}
            height={512}
          />
        </div>
      ))}
    </div>
  );
}
