import { useState } from "react";

import Head from "next/head";
import { alegreyaFont } from "utils/fonts";

import Header from "./Header";
import { useWindowSize } from "usehooks-ts";
import Socials from "./Socials";

const SCROLL_OFFSET = 10;
export const NAVIGATION_BREAKPOINT = 1024;

export default function Layout({ children }: { children: React.ReactNode }) {
  const windowSize = useWindowSize();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: any) => {
    const newHasScrolled = e.target.scrollTop > SCROLL_OFFSET;
    if (newHasScrolled != hasScrolled) setHasScrolled(newHasScrolled);
  };

  return (
    <div className={`${alegreyaFont.className} h-full flex flex-col justify-center items-center bg-black`}>
      <Head>
        <title>Arnout Jansen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showBackground={hasScrolled} />
      <main onScroll={handleScroll}>
        <div className="relative flex flex-1 flex-col px-8 pt-24 w-full h-full">{children}</div>
        {windowSize.width >= NAVIGATION_BREAKPOINT ? <Socials className="fixed bottom-8 right-8 flex-col" /> : null}
      </main>
    </div>
  );
}
