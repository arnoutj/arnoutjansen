import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Image from "next/image";

import Layout from "@components/Layout";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import BackgroundImage from "@components/BackgroundImage";
import PresaveCTA from "@components/PresaveCTA";
import { releases, upcomingRelease } from "data/music";
import cloudinary from "utils/cloudinary";
import { aliceFont } from "utils/fonts";
import SongCover from "@components/SongCover";
import ReleaseCTA from "@components/ReleaseCTA";

export default function Music({
  backgroundImage,
  presaveCTAImage,
  releasesWithImages
}: {
  backgroundImage: CloudinaryImageUrl;
  presaveCTAImage: CloudinaryImageUrl;
  releasesWithImages: Array<(typeof releases)[number] & { image: CloudinaryImageUrl }>;
}) {
  return (
    <Layout pageTitle="Music">
      <section className="section justify-center">
        <div className="flex flex-col w-full md:max-w-4xl mb-12 pt-12">
          {/* <PresaveCTA title={upcomingRelease.title} url={upcomingRelease.url} image={presaveCTAImage} /> */}
          <ReleaseCTA
            title={releasesWithImages[0].title}
            url={releasesWithImages[0].url}
            image={releasesWithImages[0].image}
          />
        </div>
      </section>
      {/* <section className="section bg-black bg-opacity-80 py-16">
        <div className="w-full md:max-w-4xl grid sm:grid-cols-2">
          {releasesWithImages.map(({ title, image }) => (
            <div key={title} className="p-8 text-center">
              <h2 className={`${aliceFont.className} text-3xl mb-4`}>{title}</h2>
              <SongCover image={image} alt={title} className="mb-8" />
              <div>
                <button className="primary-button mr-4">Buy</button>
                <button className="secondary-button">Listen</button>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <BackgroundImage image={backgroundImage} />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/ar14yq");
  const presaveCTAImage = await getCloudinaryImage(upcomingRelease.cloudinaryImagePath);
  const releasesWithImages = await Promise.all(
    releases.map(async (release) => {
      const image = await getCloudinaryImage(release.cloudinaryImagePath);
      return { ...release, image };
    })
  );

  return {
    props: { backgroundImage, presaveCTAImage, releasesWithImages }
  };
}
