import type { AppProps } from "next/app";
import {
  Antic_Didone,
  Bentham,
  Calistoga,
  Cinzel_Decorative,
  Cormorant,
  Della_Respira,
  Fugaz_One,
  Italiana,
  Libre_Caslon_Display,
  Marcellus,
  Passion_One,
  Playfair_Display,
  Prata,
  Questrial,
  Sree_Krushnadevaraya,
  Suranna,
  Vollkorn_SC
} from "next/font/google";

import "@styles/globals.css";
import CookieConsent from "@components/CookieConsent";
import { useEffect, useState } from "react";

const antic = Antic_Didone({ weight: "400", display: "swap", subsets: ["latin"] });
const bentham = Bentham({ weight: "400", display: "swap", subsets: ["latin"] });
const calistoga = Calistoga({ weight: "400", display: "swap", subsets: ["latin"] });
const cinzel = Cinzel_Decorative({ weight: "400", display: "swap", subsets: ["latin"] });
const cormorant = Cormorant({ weight: "400", display: "swap", subsets: ["latin"] });
const della = Della_Respira({ weight: "400", display: "swap", subsets: ["latin"] });
const fugaz_one = Fugaz_One({ weight: "400", display: "swap", subsets: ["latin"] });
const italiana = Italiana({ weight: "400", display: "swap", subsets: ["latin"] });
const libre = Libre_Caslon_Display({ weight: "400", display: "swap", subsets: ["latin"] });
const marcellus = Marcellus({ weight: "400", display: "swap", subsets: ["latin"] });
const passion = Passion_One({ weight: "400", display: "swap", subsets: ["latin"] });
const playfair = Playfair_Display({ weight: "400", display: "swap", subsets: ["latin"] });
const prata = Prata({ weight: "400", display: "swap", subsets: ["latin"] });
const questrial = Questrial({ weight: "400", display: "swap", subsets: ["latin"] });
const sree = Sree_Krushnadevaraya({ weight: "400", display: "swap", subsets: ["latin"] });
const suranna = Suranna({ weight: "400", display: "swap", subsets: ["latin"] });
const vollkorn = Vollkorn_SC({ weight: "400", display: "swap", subsets: ["latin"] });

const fonts = [
  antic,
  bentham,
  calistoga,
  cinzel,
  cormorant,
  della,
  fugaz_one,
  italiana,
  libre,
  marcellus,
  passion,
  playfair,
  prata,
  questrial,
  sree,
  suranna,
  vollkorn
];

function Application({ Component, pageProps }: AppProps) {
  const [fontIndex, setFontIndex] = useState(0);
  const font = fonts[fontIndex];

  useEffect(() => {
    const listener = (event: any) => {
      const nextFont = fonts[fontIndex + 1];
      const previousFont = fonts[fontIndex - 1];
      if (event.key === "ArrowRight" && nextFont) {
        setFontIndex(fontIndex + 1);
      } else if (event.key === "ArrowLeft" && previousFont) {
        setFontIndex(fontIndex - 1);
      }
    };

    document.addEventListener("keyup", listener);
    return () => document.removeEventListener("keyup", listener);
  }, [fontIndex]);

  return (
    <div className={font.className}>
      <Component {...pageProps} />
      <CookieConsent />
    </div>
  );
}

export default Application;
