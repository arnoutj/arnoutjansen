import Head from 'next/head';
import Header from 'components/Header';
import Background from '@components/Background';
import Socials from '@components/Socials';
import NewsLetterSignUpForm from '@components/NewsletterSignupForm';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Arnout Jansen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Arnout Jansen" />

        <div style={{ paddingLeft: 30 }}>
          <Socials />
          <NewsLetterSignUpForm />
        </div>
        <h1
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            transform: 'translate3d(-50%, 0, 0)',
            fontSize: 40,
            color: '#FDFF90',
            textAlign: 'center',
            marginBottom: 30,
            width: '100%',
          }}
        >
          Coming soon!
        </h1>
      </main>

      <div>
        <Background />
      </div>
    </div>
  );
}
