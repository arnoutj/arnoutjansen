
import Head from "next/head";
import { alegreyaFont } from "utils/fonts";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${alegreyaFont.className} h-full flex flex-col justify-center items-center bg-black`}>
      <Head>
        <title>Arnout Jansen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </div>
  );
}
