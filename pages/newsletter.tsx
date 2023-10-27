import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import NewsLetterSignUpForm from "@components/NewsletterSignupForm";
import BackgroundImage from "@components/BackgroundImage";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";

export default function Newsletter({ backgroundImage }: { backgroundImage: CloudinaryImageUrl }) {
  return (
    <Layout pageTitle="Welcome">
      <section className="section">
        <div className="w-full flex flex-1 flex-col justify-end pb-12 md:pb-0 md:justify-center 2xl:items-center md:pt-24">
          <NewsLetterSignUpForm />
        </div>
      </section>
      <BackgroundImage image={backgroundImage} quality={90} />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/tlwtbs");

  return {
    props: { backgroundImage }
  };
}
