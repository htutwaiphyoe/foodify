import { IoStar, IoStarHalf } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Button } from "components/atoms/Button";
import { ImageProps } from "types";

export const ImageCard = ({ name, description, price, rating }: ImageProps) => {
  return (
    <div className="absolute left-0 z-10 flex flex-col items-center justify-center w-full h-full transition-all duration-500 top-full bg-secondary opacity-80 group-hover:top-0">
      <h3 className="my-0.5 font-semibold text-18">{name}</h3>
      <div className="flex items-center justify-center gap-0.5">
        <IoStar className="text-primary" />
        <IoStar className="text-primary" />
        <IoStar className="text-primary" />
        <IoStar className="text-primary" />
        <IoStarHalf className="text-primary" />
        <p>({rating})</p>
      </div>
      <p className="max-w-20 leading-1.3 my-0.5 text-center">{description}</p>
      <div className="flex items-center justify-between gap-4 p-1">
        <p className="font-semibold text-18">${price}</p>
        <Button type="icon">
          <RiShoppingCart2Fill className="text-white text-normal" />
        </Button>
      </div>
    </div>
  );
};
