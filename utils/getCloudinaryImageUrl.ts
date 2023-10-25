import cloudinary from "./cloudinary";
import getBase64ImageUrl from "./getBase64ImageUrl";

export type CloudinaryImageUrl = { src?: string; blurDataUrl: string };

export default async function getCloudinaryImage(publicId: string): Promise<CloudinaryImageUrl> {
  const src = await cloudinary.v2.url(publicId, {
    format: "jpg",
    version: "2"
  });
  const blurDataUrl = await getBase64ImageUrl(publicId);
  return { src, blurDataUrl };
}
