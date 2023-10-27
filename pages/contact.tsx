import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import BackgroundImage from "@components/BackgroundImage";

export default function Contact({ backgroundImage }: { backgroundImage: CloudinaryImageUrl }) {
  return (
    <Layout pageTitle="Contact">
      <section className="section">
        <div className="max-w-md md:max-w-3xl mb-12">
          <h1 className="mt-12 mb-6 text-4xl font-bold text-center">Contact</h1>
          <p className="text-lg text-center">
            For any inquiries please contact me via email:
            <br />
            <a className="underline text-amber-400" href="mailto:info@arnoutjansen.com">
              info@arnoutjansen.com
            </a>
          </p>
        </div>
      </section>
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
