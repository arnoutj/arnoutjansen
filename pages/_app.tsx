import type { AppProps } from "next/app";

import CookieConsent from "@components/CookieConsent";
import GoogleAnalytics from "@components/GoogleAnalytics";
import usePageLoading from "hooks/usePageLoading";

import "@styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  usePageLoading();

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default Application;
