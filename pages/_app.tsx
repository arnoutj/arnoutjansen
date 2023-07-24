import type { AppProps } from "next/app";
import { Alegreya } from "next/font/google";

import "@styles/globals.css";
import CookieConsent from "@components/CookieConsent";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default Application;
