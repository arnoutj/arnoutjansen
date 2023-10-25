import type { AppProps } from "next/app";

import { alegreyaFont, aliceFont } from "utils/fonts";
import CookieConsent from "@components/CookieConsent";
import GoogleAnalytics from "@components/GoogleAnalytics";
import usePageLoading from "hooks/usePageLoading";

import "@styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  usePageLoading();

  return (
    <>
      {/* Ensure that fonts are preloaded for all routes */}
      <style jsx global>{`
        html {
          font-family: ${alegreyaFont.style.fontFamily};
        }

        .logo {
          font-family: ${aliceFont.style.fontFamily};
        }
      `}</style>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default Application;
