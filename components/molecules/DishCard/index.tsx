import Image from "next/image";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { PopularDish } from "types";
import { Button } from "components/atoms/Button";

export const DishCard = ({
  image,
  name,
  description,
  price,
  rating,
}: PopularDish) => {
  return (
    <article className="p-2 text-center rounded-5 bg-secondary">
      <Image
        width="200"
        height="200"
        src={`/assets/popular/${image}`}
        alt={name}
        className="rounded-4.5 object-cover"
      />
      <h3 className="my-0.5 font-semibold text-18">{name}</h3>
      <div className="flex items-center justify-center gap-0.5">
        <IoStar className="text-yellow" />
        <IoStar className="text-yellow" />
        <IoStar className="text-yellow" />
        <IoStar className="text-yellow" />
        <IoStarHalf className="text-yellow" />
        <p>({rating})</p>
      </div>
      <p className="max-w-20 leading-1.3 my-0.5">{description}</p>
      <div className="flex items-center justify-between p-1">
        <p className="font-semibold text-18">${price}</p>
        <Button type="icon">
          <RiShoppingCart2Fill className="text-white text-normal" />
        </Button>
      </div>
    </article>
  );
};
