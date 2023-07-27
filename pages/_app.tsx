import type { AppProps } from "next/app";
import { Alegreya } from "next/font/google";

import "@styles/globals.css";
import CookieConsent from "@components/CookieConsent";
import GoogleAnalytics from "@components/GoogleAnalytics";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default Application;
