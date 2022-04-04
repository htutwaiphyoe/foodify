import Image from "next/image";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const DishCard = () => {
  return (
    <article className="p-2 text-center rounded-5 bg-secondary">
      <Image
        width="200"
        height="200"
        src="/assets/popular/popular1.png"
        alt="popular1"
        className="rounded-4.5"
      />
      <h3 className="my-0.5 font-semibold text-18">Beef steak</h3>
      <div className="flex items-center justify-center gap-0.5">
        <IoStar className="text-yellow" />
        <IoStar className="text-yellow" />
        <IoStar className="text-yellow" />
        <IoStar className="text-yellow" />
        <IoStarHalf className="text-yellow" />
        <p>(4.5)</p>
      </div>
      <p className="max-w-20 leading-1.3 my-0.5">
        We analyze the food rankings for better services
      </p>

      <div className="flex items-center justify-between p-1">
        <p className="font-semibold text-18">$8.99</p>
        <button className="p-1 bg-primary rounded-1">
          <RiShoppingCart2Fill className="text-white text-normal" />
        </button>
      </div>
    </article>
  );
};
