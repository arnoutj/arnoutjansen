import type { CloudinaryImageUrl } from "utils/getCloudinaryImageUrl";

import Layout from "@components/Layout";
import NewsLetterSignUpForm from "@components/NewsletterSignupForm";
import BackgroundImage from "@components/BackgroundImage";
import getCloudinaryImage from "utils/getCloudinaryImageUrl";
import Image from "next/image";

export default function Home({ backgroundImage }: { backgroundImage: CloudinaryImageUrl }) {
  return (
    <Layout pageTitle="Welcome">
      <div className="relative flex flex-1 flex-col w-full h-full">
        <div className="flex flex-1 flex-col items-center justify-center">
          <ReleaseCTA />
        </div>
      </div>
      <BackgroundImage image={backgroundImage} quality={90} className="opacity-20" />
    </Layout>
  );
}

function ReleaseCTA() {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">'Retrace' is out now!</h1>
      <div className="relative aspect-square w-full max-w-xs md:w-96 mx-auto bg-cyan-900 mb-8">
        <Image src="" alt="EP" sizes="500px" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="flex justify-center">
        <button className="primary-button mr-4" type="button">
          Buy
        </button>
        <button className="secondary-button" type="button">
          Preview
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const backgroundImage = await getCloudinaryImage("website/backgrounds/cxv6ni"); // dj1gwd

  return {
    props: { backgroundImage }
  };
}
