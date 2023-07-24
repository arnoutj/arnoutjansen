import { useEffect, useState } from "react";
import {
  Abhaya_Libre,
  Acme,
  Alegreya,
  Alegreya_SC,
  Alice,
  Antic_Didone,
  Anton,
  Averia_Serif_Libre,
  Bentham,
  Braah_One,
  Bungee_Inline,
  Bungee_Outline,
  Calistoga,
  Changa_One,
  Chau_Philomene_One,
  Chonburi,
  Cinzel_Decorative,
  Concert_One,
  Corben,
  Cormorant,
  Della_Respira,
  Fredericka_the_Great,
  Fugaz_One,
  Italiana,
  Katibeh,
  Kenia,
  Langar,
  Libre_Caslon_Display,
  Limelight,
  Londrina_Sketch,
  Marcellus,
  Odibee_Sans,
  Passion_One,
  Patua_One,
  Philosopher,
  Playfair_Display,
  Prata,
  Questrial,
  Rakkas,
  Rammetto_One,
  Rowdies,
  Russo_One,
  Rye,
  Sansita,
  Signika_Negative,
  Sirin_Stencil,
  Smythe,
  Sniglet,
  Sree_Krushnadevaraya,
  Suranna,
  Tilt_Warp,
  Trochut,
  Vollkorn_SC
} from "next/font/google";
import { alegreya } from "pages/_app";

export const alegreyaSC = Alegreya_SC({ weight: "400", display: "swap", subsets: ["latin"] });
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

export const abhaya = Abhaya_Libre({ weight: "700", display: "swap", subsets: ["latin"] });
export const alice = Alice({ weight: "400", display: "swap", subsets: ["latin"] });
export const philosopher = Philosopher({ weight: "400", display: "swap", subsets: ["latin"] });
export const signika = Signika_Negative({ weight: ["600"], display: "swap", subsets: ["latin"] });
export const rowdies = Rowdies({ weight: ["400"], display: "swap", subsets: ["latin"] });
export const russo = Russo_One({ weight: ["400"], display: "swap", subsets: ["latin"] });
export const langar = Langar({ weight: ["400"], display: "swap", subsets: ["latin"] });
export const smythe = Smythe({ weight: ["400"], display: "swap", subsets: ["latin"] });

const fonts = [
  alice,
  alegreya,
  alegreyaSC,
  smythe,
  philosopher,
  rowdies,
  russo,
  signika,
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
      <h1 className="text-5xl md:text-5xl font-bold text-shadow">{title}</h1>
    </header>
  );
}
