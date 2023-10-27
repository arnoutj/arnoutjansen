import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import BackgroundImage from "@components/BackgroundImage";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import PresaveCTA from "@components/PresaveCTA";

import { upcomingRelease } from "data/music";

export default function Home({
  backgroundImage,
  presaveCTAImage
}: {
  backgroundImage: CloudinaryImageUrl;
  presaveCTAImage: CloudinaryImageUrl;
}) {
  return (
    <Layout pageTitle="Welcome">
      <section className="section justify-center">
        <PresaveCTA title={upcomingRelease.title} url={upcomingRelease.url} image={presaveCTAImage} />
      </section>
      <BackgroundImage image={backgroundImage} quality={90} className="opacity-20" />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/cxv6ni"); // dj1gwd
  const presaveCTAImage = await getCloudinaryImage(upcomingRelease.cloudinaryImagePath);
  return {
    props: { backgroundImage, presaveCTAImage }
  };
}
