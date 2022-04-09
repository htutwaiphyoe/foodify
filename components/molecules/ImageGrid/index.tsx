import Image from "next/image";
import { ImageCard } from "components/molecules/ImageCard";

export const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-30 xs:grid-cols-2 md:grid-cols-4 md:grid-rows-8 xs:grid-rows-16">
      <figure className="relative row-start-1 row-end-5 overflow-hidden group cursor-zoom-in">
        <Image
          layout="fill"
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
          layout="fill"
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
      <figure className="relative overflow-hidden row-end-14 row-start-9 xs:row-start-1 xs:row-end-6 group cursor-zoom-in">
        <Image
          layout="fill"
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
      <figure className="relative overflow-hidden row-start-14 row-end-17 xs:row-start-6 group xs:row-end-9 cursor-zoom-in">
        <Image
          layout="fill"
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
      <figure className="relative overflow-hidden row-start-17 row-end-20 xs:row-start-9 xs:row-end-12 md:row-end-4 md:row-start-1 group cursor-zoom-in">
        <Image
          layout="fill"
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
      <figure className="relative overflow-hidden row-start-20 row-end-25 xs:row-start-12 xs:row-end-17 md:row-start-4 md:row-end-9 group cursor-zoom-in">
        <Image
          layout="fill"
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
      <figure className="relative overflow-hidden row-start-25 row-end-33 md:row-start-1 md:row-end-9 xs:row-start-9 xs:col-start-2 xs:row-end-17 md:col-start-4 group cursor-zoom-in">
        <Image
          layout="fill"
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
