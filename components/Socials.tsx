import Image from "next/image";
import instagramIcon from "../public/icons/instagram.svg";
import Link from "next/link";

export default function Socials() {
  return (
    <Link
      href="https://www.instagram.com/arnoutjansen_"
      target="blank"
      style={{
        display: "flex",
        alignItems: "center",
        color: "#fff",
        textDecoration: "none",
        fontSize: 20
      }}
    >
      <Image priority src={instagramIcon} alt="Follow me on Instagram" />
      <span style={{ paddingLeft: 10 }}>Follow me</span>
    </Link>
  );
}
