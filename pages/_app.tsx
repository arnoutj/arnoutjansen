import type { AppProps } from "next/app";

import "@styles/globals.css";
import CookieConsent from "@components/CookieConsent";
import GoogleAnalytics from "@components/GoogleAnalytics";
import { usePageLoading } from "hooks/usePageLoading";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function Application({ Component, pageProps }: AppProps) {
  const isPageLoading = usePageLoading();

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <CookieConsent />
      {isPageLoading ? "Loading..." : null}
    </>
  );
}

export default Application;
