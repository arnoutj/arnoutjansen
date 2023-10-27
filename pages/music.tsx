import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Image from "next/image";

import Layout from "@components/Layout";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import BackgroundImage from "@components/BackgroundImage";
import PresaveCTA from "@components/PresaveCTA";
import { releases, upcomingRelease } from "data/music";
import cloudinary from "utils/cloudinary";

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
          <PresaveCTA title={upcomingRelease.title} url={upcomingRelease.url} image={presaveCTAImage} />
        </div>
      </section>
      <section className="section bg-black bg-opacity-50 py-16">
        <div className="w-full grid sm:grid-cols-2">
          {releasesWithImages.map(({ title, image }) => (
            <div key={title} className="p-8">
              <div className="relative aspect-square w-full mb-8">
                <Image
                  src={image.src ?? ""}
                  blurDataURL={image.blurDataUrl}
                  alt={title}
                  sizes="500px"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
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
