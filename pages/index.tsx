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
      <div className="flex flex-1 flex-col pl-8">
        <Socials />
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-4xl mb-4 max-w-xs text-amber-300">
            Join the <span className="text-white">mailing list</span>
            <br /> to hear about my music
          </h1>
          <NewsLetterSignUpForm />
        </div>
        <h1
          className="text-amber-300"
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            transform: 'translate3d(-50%, 0, 0)',
            fontSize: 40,
            textAlign: 'center',
            marginBottom: 30,
            width: '100%'
          }}
        >
          Coming soon!
        </h1>
      </div>
      <Background />
    </Layout>
  );
}
