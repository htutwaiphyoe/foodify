import Image from "next/image";
import { ImageCard } from "components/molecules/ImageCard";

export const ImageGrid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-8">
      <figure className="relative row-start-1 row-end-5 overflow-hidden group cursor-zoom-in">
        <Image
          width={360}
          height={360}
          src={"/assets/menu/menu1.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="Pizza"
          price={8.99}
          rating={4.6}
        />
      </figure>
      <figure className="relative row-start-5 overflow-hidden group row-end-9 cursor-zoom-in">
        <Image
          width={360}
          height={360}
          src={"/assets/menu/menu2.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="Cheese Hamburger"
          price={5.99}
          rating={4.3}
        />
      </figure>
      <figure className="relative row-start-1 row-end-6 overflow-hidden group cursor-zoom-in">
        <Image
          width={360}
          height={450}
          src={"/assets/menu/menu3.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="Beef Hamburger"
          price={6.99}
          rating={4.7}
        />
      </figure>
      <figure className="relative row-start-6 overflow-hidden group row-end-9 cursor-zoom-in">
        <Image
          width={360}
          height={270}
          src={"/assets/menu/menu4.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="Tomyang Soup"
          price={4.99}
          rating={4.5}
        />
      </figure>
      <figure className="relative row-start-1 row-end-4 overflow-hidden group cursor-zoom-in">
        <Image
          width={360}
          height={270}
          src={"/assets/menu/menu5.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="Beef Steak"
          price={16.99}
          rating={4.4}
        />
      </figure>
      <figure className="relative row-start-4 overflow-hidden row-end-9 group cursor-zoom-in">
        <Image
          width={360}
          height={450}
          src={"/assets/menu/menu6.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="BBQ"
          price={25.99}
          rating={4.9}
        />
      </figure>
      <figure className="relative row-start-1 overflow-hidden row-end-9 group cursor-zoom-in">
        <Image
          width={360}
          height={720}
          src={"/assets/menu/menu7.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <ImageCard
          description="We analyze the food rankings for better services"
          name="Noodle"
          price={3.99}
          rating={4.7}
        />
      </figure>
    </div>
  );
};
