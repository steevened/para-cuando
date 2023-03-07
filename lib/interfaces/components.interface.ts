import { StaticImageData } from 'next/image';

export default interface Children {
  children: React.ReactNode;
}

export interface ItemSlider {
  id: number;
  title: string;
  description: string;
  web: string;
  votes: number;
  img: StaticImageData | String;
}

export interface ClassName {
  className: string;
}
