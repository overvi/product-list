export default interface Card {
  id: number;
  images: Image;
  titles: { brief: string; full: string };
  price: number;
}

interface Image {
  desktop: string;
  mobile: string;
  tablet: string;
  thumbnail: string;
}

export default interface cart {
  id: number;
  images: Image;
  titles: { brief: string; full: string };
  price: number;
  quantity: number;
}
