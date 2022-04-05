export type PopularDish = {
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
};

export type HowItWorks = {
  image: string;
  Icon: () => JSX.Element;
  title: string;
  description: string;
  isReversed: boolean;
};
