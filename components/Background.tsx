import Image from 'next/image';
import { useState } from 'react';
import getStaticFileUrl from 'utils/getStaticFileUrl';
import BlurImage from './BlurImage';

export default function Background() {
  return (
    <BlurImage
      alt="Copyright 2023 © Arnout Jansen"
      src={getStaticFileUrl('background-1440.png')}
      quality={50}
      sizes="100vw"
      style={{ zIndex: -1 }}
      fill
      priority
    />
  );
}
