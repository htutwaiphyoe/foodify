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

export type Testimonial = {
  image: string;
  name: string;
  review: string;
};

export type ButtonProps = {
  type: "submit" | "icon" | "outline";
  children: string | JSX.Element;
};

export type NavItem = {
  text: string;
  id: string;
};
