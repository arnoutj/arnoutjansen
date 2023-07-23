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
          <NewsLetterSignUpForm />
        </div>
      </div>
      <div className="rounded sm bg-indigo-600 w-full p-8 bg-opacity-30">
        <h2 className="text-4xl text-white sm:text-center">More coming soon!</h2>
      </div>
      <Background />
    </Layout>
  );
}
