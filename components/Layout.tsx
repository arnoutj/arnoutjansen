import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Head>
        <title>Arnout Jansen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </div>
  );
}
