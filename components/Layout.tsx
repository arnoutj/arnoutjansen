import Head from "next/head";
import { alegreyaFont } from "utils/fonts";

import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${alegreyaFont.className} h-full flex flex-col justify-center items-center bg-black`}>
      <Head>
        <title>Arnout Jansen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="relative flex flex-1 flex-col px-8 pt-24 w-full h-full">{children}</div>
      </main>
    </div>
  );
}
