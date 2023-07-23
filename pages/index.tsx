import Head from 'next/head';
import Header from 'components/Header';
import Background from '@components/Background';
import Socials from '@components/Socials';
import Layout from '@components/Layout';
import NewsLetterSignUpForm from '@components/NewsletterSignupForm';

export default function Home() {
  return (
    <Layout>
      <Header title="Arnout Jansen" />
      <div className="relative flex flex-1 flex-col px-8 w-full h-full">
        <Socials />
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-4xl mb-4 max-w-xs text-amber-300">
            Join the <span className="text-white">mailing list</span>
            <br /> to hear about my music
          </h1>
          <NewsLetterSignUpForm />
        </div>
      </div>
      <h1 className="absolute text-blue-300 text-4xl sm:text-5xl bottom-12 left-8 lg:text-center lg:left-1/2 lg:-translate-x-1/2">
        More coming soon!
      </h1>
      <Background />
    </Layout>
  );
}
