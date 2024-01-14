import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import BackgroundImage from "@components/BackgroundImage";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";

import { releases, upcomingRelease } from "data/music";
import ReleaseCTA from "@components/ReleaseCTA";
import PresaveCTA from "@components/PresaveCTA";

export default function Home({
  backgroundImage,
  releaseCTAImage
}: {
  backgroundImage: CloudinaryImageUrl;
  releaseCTAImage: CloudinaryImageUrl;
}) {
  return (
    <Layout pageTitle="Welcome">
      <section className="section justify-center">
        {/* <PresaveCTA title={upcomingRelease.title} url={upcomingRelease.url} image={releaseCTAImage} /> */}
        <ReleaseCTA title={`'${releases[0].title}' is out now!`} url={releases[0].url} image={releaseCTAImage} />
      </section>
      <BackgroundImage image={backgroundImage} quality={90} className="opacity-20" />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/cxv6ni"); // dj1gwd
  const releaseCTAImage = await getCloudinaryImage(releases[0].cloudinaryImagePath);
  return {
    props: { backgroundImage, releaseCTAImage }
  };
}
