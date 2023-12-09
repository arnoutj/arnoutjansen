import InstagramIcon from "../public/icons/instagram.svg";
import TiktokIcon from "../public/icons/tiktok.svg";
import FacebookIcon from "../public/icons/facebook.svg";
import BandcampIcon from "../public/icons/bandcamp.svg";

import Link from "next/link";

const linkClassname =
  "w-5 h-5 ml-3 lg:ml-0 lg:w-7 lg:h-7 mt-6 flex items-center text-white hover:text-indigo-400 hover:fill-indigo-400 transition-colors duration-200";

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={`flex ${className}`}>
      <Link href="https://www.instagram.com/arnoutjansen_" target="blank" title="Instagram" className={linkClassname}>
        <InstagramIcon className="w-full h-full" alt="Instagram" />
      </Link>
      <Link href="https://www.tiktok.com/@arnoutjansen_" target="blank" title="Tiktok" className={linkClassname}>
        <TiktokIcon className="w-full h-full" alt="Tiktok" />
      </Link>
      <Link href="https://www.facebook.com/arnoutjansenmusic" target="blank" title="Facebook" className={linkClassname}>
        <FacebookIcon className="w-full h-full" alt="Facebook" />
      </Link>
      <Link href="https://arnoutjansen.bandcamp.com" target="blank" title="Bandcamp" className={linkClassname}>
        <BandcampIcon className="w-full h-full" alt="Bandcamp" />
      </Link>
    </div>
  );
}
