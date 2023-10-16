import { aliceFont } from "utils/fonts";
import Navigation from "./Navigation";

export default function Header({ showBackground }: { showBackground: boolean }) {
  return (
    <header
      className={`${
        aliceFont.className
      } w-100 p-8 absolute top-0 left-0 w-full z-10 flex items-center justify-between transition-all duration-500 ${
        showBackground ? "bg-black" : ""
      }`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-shadow">Arnout Jansen</h1>
      <Navigation />
    </header>
  );
}
