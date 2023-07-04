import Image from 'next/image';
import backgroundImage from '../public/background-1440.png';

export default function Background() {
  return (
    <Image
      alt="Copyright 2023 © Arnout Jansen"
      src={backgroundImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{ objectFit: 'cover' }}
    />
  );
}
