import { aliceFont } from "utils/fonts";

export default function Header({ title }: { title: string }) {
  return (
    <header className={`${aliceFont.className} w-100 p-8 pb-4`}>
      <h1 className="text-5xl md:text-5xl font-bold text-shadow">{title}</h1>
    </header>
  );
}
