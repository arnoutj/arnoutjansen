import type { ImageProps } from "utils/types";
import Image from "next/image";

export type GalleryImage = {
  filename: string;
  colspan?: number;
  image: ImageProps;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map(({ image: { id, blurDataUrl, public_id, format }, colspan }) => (
        <div key={id} className={`flex align-center justify-end md:col-span-${colspan ?? 1}`}>
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
