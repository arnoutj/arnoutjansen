import InstagramIcon from "../public/icons/instagram.svg";
import TiktokIcon from "../public/icons/tiktok.svg";
import FacebookIcon from "../public/icons/facebook.svg";

import Link from "next/link";

const linkClassname =
  "w-7 h-7 ml-4 mt-6 flex items-center text-white hover:text-indigo-400 hover:fill-indigo-400 transition-colors duration-200";

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={`flex ${className}`}>
      <Link href="https://www.instagram.com/arnoutjansen_" target="blank" className={linkClassname}>
        <InstagramIcon className="w-full h-full" alt="Instagram" />
      </Link>
      <Link href="https://www.tiktok.com/@arnoutjansen_" target="blank" className={linkClassname}>
        <TiktokIcon className="w-full h-full" alt="Tiktok" />
      </Link>
      <Link href="https://www.facebook.com/arnoutjansenmusic" target="blank" className={linkClassname}>
        <FacebookIcon className="w-full h-full" alt="Facebook" />
      </Link>
    </div>
  );
}
