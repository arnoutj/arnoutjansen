import type { ImageProps } from "utils/types";

import Socials from "@components/Socials";
import Layout from "@components/Layout";
import Background from "@components/Background";
import Gallery, { GalleryImage } from "@components/Gallery";
import cloudinary from "utils/cloudinary";
import getBase64ImageUrl from "utils/generateBlurPlaceholder";

export default function About({ images }: { images: GalleryImage[] }) {
  return (
    <Layout>
      <Socials />
      <div className="flex flex-1 flex-col items-center">
        <div className="max-w-md md:max-w-3xl">
          <h1 className="mt-12 mb-6 text-4xl font-bold text-center">About</h1>
          <p className="mb-4 text-lg">
            Berlin-based musician Arnout Jansen embarked on a musical journey from a young age, discovering the
            enchanting world of the piano. His exploration began with classical training and evolved into forays into
            jazz and electronic music, creating a diverse musical tapestry.
          </p>
          <p className="mb-12 text-lg">
            Arnout's path featured unexpected twists, including becoming a medical doctor and working in programming.
            However, his unwavering passion for music led him back to the keys. During the pandemic, he retreated to
            Berlin, focusing on solo piano work. The city's isolation fueled his creativity, and his compositions,
            inspired by classical and jazz greats, offer a serene escape in a chaotic world. Arnout's music beckons
            introspection and solace, providing a tranquil refuge for modern times.
          </p>
          <Gallery images={images} />
        </div>
      </div>
      {/* <Background /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/about/*`)
    .sort_by("public_id", "asc")
    .max_results(10)
    .execute();

  const orderedImageFilenames = [
    { filename: "yy4prr", colspan: 2 },
    { filename: "pskdfv" },
    { filename: "jlncy9" },
    { filename: "cg5rmt", colspan: 2 },
    { filename: "qzw2nf" },
    { filename: "ilmbzw" }
  ] as const;

  const orderedResults = orderedImageFilenames
    .map((g, i) => ({
      ...g,
      image: results.resources.find((i: ImageProps) => i.filename === g.filename) as GalleryImage["image"],
      id: i
    }))
    .filter((g) => !!g.image);

  const blurImagePromises = results.resources.map((image: ImageProps) => getBase64ImageUrl(image));
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  orderedResults.forEach((v, i) => {
    orderedResults[i].image.blurDataUrl = imagesWithBlurDataUrls[i];
  });

  return {
    props: {
      images: orderedResults
    }
  };
}
