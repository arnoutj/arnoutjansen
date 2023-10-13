import type { ImageProps } from "utils/types";
import Image from "next/image";

export default function Gallery({ images }: { images: ImageProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ height: 1000 }}>
      {images.map(({ id, blurDataUrl, public_id, format, width, height }) => (
        <div key={id} className={`flex justify-end ${width > height ? "md:col-span-2" : ""}`}>
          <Image
            alt="© Arnout Jansen"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </div>
      ))}
    </div>
  );
}
