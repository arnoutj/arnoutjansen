import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import BackgroundImage from "@components/BackgroundImage";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import PresaveCTA from "@components/PresaveCTA";

export default function Home({
  backgroundImage,
  presaveCTAImage
}: {
  backgroundImage: CloudinaryImageUrl;
  presaveCTAImage: CloudinaryImageUrl;
}) {
  return (
    <Layout pageTitle="Welcome">
      <div className="relative flex flex-1 flex-col w-full h-full">
        <div className="flex flex-1 flex-col items-center justify-center">
          <PresaveCTA title="Retrace" image={presaveCTAImage} />
        </div>
      </div>
      <BackgroundImage image={backgroundImage} quality={90} className="opacity-20" />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/cxv6ni"); // dj1gwd
  const presaveCTAImage = await getCloudinaryImage("website/artwork/Cover_2_ajqjof");
  return {
    props: { backgroundImage, presaveCTAImage }
  };
}
