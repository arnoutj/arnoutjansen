import Image from "next/image";
import Link from "next/link";

export function ReleaseCTA({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">'{title}' is out now!</h1>
      <div className="relative aspect-square w-full max-w-xs md:w-96 mx-auto bg-cyan-900 mb-8">
        <Image src="" alt={title} sizes="500px" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="flex justify-center">
        <Link className="primary-button mr-4" href="#" target="_blank" title={`Buy ${title}`}>
          Buy
        </Link>
        <Link className="secondary-button" href="#" title={`Preview ${title}`}>
          Preview
        </Link>
      </div>
    </div>
  );
}
