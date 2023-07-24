import { useEffect, useState } from "react";
import {
  Antic_Didone,
  Averia_Serif_Libre,
  Bentham,
  Braah_One,
  Calistoga,
  Changa_One,
  Chau_Philomene_One,
  Chonburi,
  Cinzel_Decorative,
  Concert_One,
  Corben,
  Cormorant,
  Della_Respira,
  Fugaz_One,
  Italiana,
  Katibeh,
  Libre_Caslon_Display,
  Marcellus,
  Odibee_Sans,
  Passion_One,
  Playfair_Display,
  Prata,
  Questrial,
  Rakkas,
  Sansita,
  Sree_Krushnadevaraya,
  Suranna,
  Vollkorn_SC
} from "next/font/google";

export const antic = Antic_Didone({ weight: "400", display: "swap", subsets: ["latin"] });
export const averia = Averia_Serif_Libre({ weight: "400", display: "swap", subsets: ["latin"] });
export const bentham = Bentham({ weight: "400", display: "swap", subsets: ["latin"] });
export const calistoga = Calistoga({ weight: "400", display: "swap", subsets: ["latin"] });
export const changa = Changa_One({ weight: "400", display: "swap", subsets: ["latin"] });
export const cinzel = Cinzel_Decorative({ weight: "400", display: "swap", subsets: ["latin"] });
export const corben = Corben({ weight: "400", display: "swap", subsets: ["latin"] });
export const chonburi = Chonburi({ weight: "400", display: "swap", subsets: ["latin"] });
export const cormorant = Cormorant({ weight: "400", display: "swap", subsets: ["latin"] });
export const della = Della_Respira({ weight: "400", display: "swap", subsets: ["latin"] });
export const fugaz_one = Fugaz_One({ weight: "400", display: "swap", subsets: ["latin"] });
export const italiana = Italiana({ weight: "400", display: "swap", subsets: ["latin"] });
export const katibeh = Katibeh({ weight: "400", display: "swap", subsets: ["latin"] });
export const libre = Libre_Caslon_Display({ weight: "400", display: "swap", subsets: ["latin"] });
export const marcellus = Marcellus({ weight: "400", display: "swap", subsets: ["latin"] });
export const passion = Passion_One({ weight: "400", display: "swap", subsets: ["latin"] });
export const playfair = Playfair_Display({ weight: "400", display: "swap", subsets: ["latin"] });
export const prata = Prata({ weight: "400", display: "swap", subsets: ["latin"] });
export const questrial = Questrial({ weight: "400", display: "swap", subsets: ["latin"] });
export const rakkas = Rakkas({ weight: "400", display: "swap", subsets: ["latin"] });
export const sree = Sree_Krushnadevaraya({ weight: "400", display: "swap", subsets: ["latin"] });
export const sansita = Sansita({ weight: "400", display: "swap", subsets: ["latin"] });
export const suranna = Suranna({ weight: "400", display: "swap", subsets: ["latin"] });
export const vollkorn = Vollkorn_SC({ weight: "400", display: "swap", subsets: ["latin"] });

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

export default function Header({ title }: { title: string }) {
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
    <header className={`${font.className} w-100 p-8 pb-4`}>
      <h1 className="text-4xl md:text-5xl">{title}</h1>
    </header>
  );
}
