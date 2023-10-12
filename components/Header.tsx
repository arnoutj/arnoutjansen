import { aliceFont } from "utils/fonts";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header
      className={`${aliceFont.className} w-100 p-8 pb-4 absolute top-0 left-0 w-full z-10 flex items-center justify-between`}
    >
      <h1 className="text-5xl md:text-5xl font-bold text-shadow">Arnout Jansen</h1>
      <Navigation />
    </header>
  );
}
