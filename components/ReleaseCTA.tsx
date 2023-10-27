import Image from "next/image";
import Link from "next/link";
import SongCover from "./SongCover";

export default function ReleaseCTA({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">'{title}' is out now!</h1>
      {/* <SongCover image={null} alt={title} className="max-w-xs md:w-96 mx-automb-8" /> */}
      <div className="flex justify-center">
        <Link className="primary-button mr-4" href="#" target="_blank" title={`Listen to ${title}`}>
          Listen
        </Link>
        <Link className="secondary-button" href="#" title={`Buy ${title}`}>
          Buy
        </Link>
      </div>
    </div>
  );
}
