import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import NewsLetterSignUpForm from "@components/NewsletterSignupForm";
import BackgroundImage from "@components/BackgroundImage";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";

export default function Home({ backgroundImage }: { backgroundImage: CloudinaryImageUrl }) {
  return (
    <Layout>
      <div className="relative flex flex-1 flex-col w-full h-full">
        <div className="flex flex-1 flex-col justify-center">
          <NewsLetterSignUpForm />
        </div>
      </div>
      <BackgroundImage image={backgroundImage} />
    </Layout>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/moxltw");

  return {
    props: { backgroundImage }
  };
}
