import { Alegreya, Alice } from "next/font/google";

export const alegreyaFont = Alegreya({
  weight: ["400", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-alegreya"
});

export const aliceFont = Alice({ weight: "400", display: "swap", subsets: ["latin"] });

