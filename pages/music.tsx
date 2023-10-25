import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import BackgroundImage from "@components/BackgroundImage";
import PresaveCTA from "@components/PresaveCTA";

export default function Music({ backgroundImage }: { backgroundImage: CloudinaryImageUrl }) {
  return (
    <Layout pageTitle="Music">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="max-w-md md:max-w-3xl mb-12 pt-12">
          {/* <h1 className="mt-12 mb-6 text-4xl font-bold text-center">Music</h1>
          <p className="text-lg text-center">Coming soon!</p> */}
          <PresaveCTA title="Retrace" />
        </div>
      </div>
      <BackgroundImage image={backgroundImage} />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/ar14yq");

  return {
    props: { backgroundImage }
  };
}
