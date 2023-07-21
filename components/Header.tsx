export default function Header({ title }: { title: string }) {
  return (
    <header className="w-100 p-3">
      <h1 className="text-4xl md:text-5xl">{title}</h1>
    </header>
  );
}
