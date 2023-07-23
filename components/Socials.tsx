import InstagramIcon from '../public/icons/instagram.svg';
import Link from 'next/link';

export default function Socials() {
  return (
    <Link
      href="https://www.instagram.com/arnoutjansen_"
      target="blank"
      className="flex items-center text-white hover:text-blue-200 hover:fill-blue-200 text-xl transition-colors duration-200"
    >
      <InstagramIcon className=" w-8 mr-3" />
      <span>Follow me</span>
    </Link>
  );
}
