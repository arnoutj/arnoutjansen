import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Arnout Jansen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming soon!" />
      </main>
    </div>
  );
}
