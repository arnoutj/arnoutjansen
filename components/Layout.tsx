import { useState } from "react";

import Head from "next/head";
import { useWindowSize } from "usehooks-ts";

import Header from "./Header";
import Socials from "./Socials";

const SCROLL_OFFSET = 10;
export const NAVIGATION_BREAKPOINT = 1024;

export default function Layout({ children, pageTitle }: { children: React.ReactNode; pageTitle: string }) {
  const windowSize = useWindowSize();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: any) => {
    const newHasScrolled = e.target.scrollTop > SCROLL_OFFSET;
    if (newHasScrolled != hasScrolled) setHasScrolled(newHasScrolled);
  };

  const title = `Arnout Jansen - ${pageTitle}`;

  return (
    <div className={`h-full flex flex-col justify-center items-center bg-black`}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showBackground={hasScrolled} />
      <main onScroll={handleScroll}>
        <div className="relative w-full">{children}</div>
        {windowSize.width >= NAVIGATION_BREAKPOINT ? <Socials className="fixed bottom-8 right-8 flex-col" /> : null}
      </main>
    </div>
  );
}
