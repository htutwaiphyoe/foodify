import { PopularDish, HowItWorks } from "types";
import { Laptop, Clock, Bicycle } from "components/ui/icons";

export const popularDishes: PopularDish[] = [
  {
    image: "popular1.png",
    name: "Beef steak",
    rating: 4.5,
    description: "We analyze the food rankings for better services",
    price: 8.99,
  },
  {
    image: "popular2.png",
    name: "Burger and Fry",
    rating: 4.3,
    description: "We analyze the food rankings for better services",
    price: 5.99,
  },
  {
    image: "popular3.png",
    name: "Chicken Pizza",
    rating: 4.7,
    description: "We analyze the food rankings for better services",
    price: 11.99,
  },
  {
    image: "popular4.png",
    name: "Chicken noodle",
    rating: 4.5,
    description: "We analyze the food rankings for better services",
    price: 7.99,
  },
  {
    image: "popular5.png",
    name: "Chicken BBQ",
    rating: 4.9,
    description: "We analyze the food rankings for better services",
    price: 12.99,
  },
];

export const howItWorks: HowItWorks[] = [
  {
    image: "/assets/how-it-works/order.png",
    title: "Order online",
    description:
      "Choose your favorite meals from our website and order easily with wide variety payment services by staying in your home",
    Icon: Laptop,
    isReversed: false,
  },
  {
    image: "/assets/how-it-works/ready.png",
    title: "Ready in 20 minutes",
    description:
      "You're only twenty minutes away from your delicious meals ready to deliver your home. We work with the best chefs to ensure that you're 100% happy.",
    Icon: Clock,
    isReversed: true,
  },
  {
    image: "/assets/how-it-works/delivery.png",
    title: "Fast Delivery",
    description:
      "We connect with the best delivery services in each town to ensure that your order is ready to your door as fast as possible.",
    Icon: Bicycle,
    isReversed: false,
  },
];
