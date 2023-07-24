import type { AppProps } from "next/app";
import { Alegreya } from "next/font/google";

import "@styles/globals.css";
import CookieConsent from "@components/CookieConsent";

export const alegreya = Alegreya({
  weight: ["400", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-alegreya"
});

function Application({ Component, pageProps }: AppProps) {
  return (
    <div className={alegreya.className}>
      <Component {...pageProps} />
      <CookieConsent />
    </div>
  );
}

export default Application;
