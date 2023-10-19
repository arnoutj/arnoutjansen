import type { ImageProps } from "./types";

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";

const cache = new Map<string, string>();

export default async function getBase64ImageUrl(imageId: string) {
  let url = cache.get(imageId);

  if (url) return url;

  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${imageId}`
  );

  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()]
  });

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;
  cache.set(imageId, url);
  return url;
}
