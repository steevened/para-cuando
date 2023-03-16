export default interface Children {
  children: React.ReactNode;
}

interface Images {
  image_url: string;
}

export interface ItemSlider {
  id: number;
  title: string;
  description: string;
  reference_link: string;
  votes_count: number;
  images: any;
}

export interface ClassName {
  className: string;
}
