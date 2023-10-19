import cloudinary from "./cloudinary";
import getBase64ImageUrl from "./generateBlurPlaceholder";

export type CloudinaryImage = { src?: string; blurDataUrl: string };

export default async function getCloudinaryImage(publicId: string): Promise<CloudinaryImage> {
  const src = await cloudinary.v2.url(publicId, { format: "jpg" });
  const blurDataUrl = await getBase64ImageUrl(publicId);
  return { src, blurDataUrl };
}
