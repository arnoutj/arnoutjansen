import type { ImageProps } from "utils/types";

import Socials from "@components/Socials";
import Layout from "@components/Layout";
import Background from "@components/Background";
import Gallery from "@components/Gallery";
import cloudinary from "utils/cloudinary";
import getBase64ImageUrl from "utils/generateBlurPlaceholder";

export default function About({ images }: { images: ImageProps[] }) {
  return (
    <Layout>
      <Socials />
      <div className="flex flex-1 flex-col items-center">
        <div className="max-w-2xl">
          <h1 className="pt-12 pb-6 text-4xl font-bold text-center">About</h1>
          <p className="pb-4 text-lg">
            Berlin-based musician Arnout Jansen embarked on a musical journey from a young age, discovering the
            enchanting world of the piano. His exploration began with classical training and evolved into forays into
            jazz and electronic music, creating a diverse musical tapestry.
          </p>
          <p className="pb-4 text-lg">
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

  let reducedResults: ImageProps[] = [];

  results.resources.forEach((result: ImageProps, i: number) => {
    reducedResults.push({
      ...result,
      id: i
    });
  });

  const blurImagePromises = results.resources.map((image: ImageProps) => getBase64ImageUrl(image));
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  reducedResults.forEach((v, i) => {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  });

  return {
    props: {
      images: reducedResults
    }
  };
}
