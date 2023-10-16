import Background from "@components/Background";
import Socials from "@components/Socials";
import Layout from "@components/Layout";
import NewsLetterSignUpForm from "@components/NewsletterSignupForm";

export default function Home() {
  return (
    <Layout>
      <div className="relative flex flex-1 flex-col w-full h-full">
        <Socials />
        <div className="flex flex-1 flex-col justify-center">
          <NewsLetterSignUpForm />
        </div>
      </div>
      <Background />
    </Layout>
  );
}
