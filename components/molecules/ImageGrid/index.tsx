import Image from "next/image";

export const ImageGrid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-8">
      <figure className="row-start-1 row-end-5 overflow-hidden">
        <Image
          width={360}
          height={360}
          src={"/assets/menu/menu1.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
      <figure className="row-start-5 overflow-hidden row-end-9">
        <Image
          width={360}
          height={360}
          src={"/assets/menu/menu2.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
      <figure className="row-start-1 row-end-6 overflow-hidden">
        <Image
          width={360}
          height={450}
          src={"/assets/menu/menu3.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
      <figure className="row-start-6 overflow-hidden row-end-9">
        <Image
          width={360}
          height={270}
          src={"/assets/menu/menu4.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
      <figure className="row-start-1 row-end-4 overflow-hidden ">
        <Image
          width={360}
          height={270}
          src={"/assets/menu/menu5.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
      <figure className="row-start-4 overflow-hidden row-end-9">
        <Image
          width={360}
          height={450}
          src={"/assets/menu/menu6.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
      <figure className="row-start-1 overflow-hidden row-end-9">
        <Image
          width={360}
          height={720}
          src={"/assets/menu/menu7.png"}
          alt={"Menu 1"}
          className="object-cover w-full h-full"
        />
      </figure>
    </div>
  );
};
