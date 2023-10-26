import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import BackgroundImage from "@components/BackgroundImage";
import PresaveCTA from "@components/PresaveCTA";
import { upcomingRelease } from "data/music";

export default function Music({
  backgroundImage,
  presaveCTAImage
}: {
  backgroundImage: CloudinaryImageUrl;
  presaveCTAImage: CloudinaryImageUrl;
}) {
  return (
    <Layout pageTitle="Music">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="max-w-md md:max-w-3xl mb-12 pt-12">
          <PresaveCTA title={upcomingRelease.title} url={upcomingRelease.url} image={presaveCTAImage} />
        </div>
      </div>
      <BackgroundImage image={backgroundImage} />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/ar14yq");
  const presaveCTAImage = await getCloudinaryImage(upcomingRelease.cloudinaryImagePath);
  return {
    props: { backgroundImage, presaveCTAImage }
  };
}
