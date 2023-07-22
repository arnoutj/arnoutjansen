import Image from 'next/image';
import instagramIcon from '../public/icons/instagram.svg';
import Link from 'next/link';

export default function Socials() {
  return (
    <Link
      href="https://www.instagram.com/arnoutjansen_"
      target="blank"
      className="flex items-center text-white text-xl"
    >
      <Image priority src={instagramIcon} alt="Follow me on Instagram" className="w-8 mr-3" />
      <span>Follow me</span>
    </Link>
  );
}
