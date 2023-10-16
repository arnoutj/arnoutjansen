import cloudinary from "./cloudinary";

const cloudinaryImageCache = new Map<string, any>();

export default async function getCloudinaryFolder(cloudinaryFolder: string) {
  let cachedResults = cloudinaryImageCache.get(cloudinaryFolder);

  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${cloudinaryFolder}*`)
      .sort_by("public_id", "desc")
      .max_results(100)
      .execute();

    cloudinaryImageCache.set(cloudinaryFolder, fetchedResults);
    return fetchedResults;
  }

  return cachedResults;
}
