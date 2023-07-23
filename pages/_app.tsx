import type { AppProps } from "next/app";
import { Passion_One } from "next/font/google";

import "@styles/globals.css";
import CookieConsent from "@components/CookieConsent";

const font = Passion_One({ weight: "400", display: "swap", subsets: ["latin"] });

function Application({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
      <CookieConsent />
    </div>
  );
}

export default Application;
