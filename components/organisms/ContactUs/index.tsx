import Image from "next/image";

export const ContactUs = () => {
  return (
    <section className="flex items-center justify-center p-5">
      <div className="flex items-center justify-center gap-5 p-4 bg-light rounded-5 max-w-88">
        <form className="flex flex-col gap-3.5">
          <h2 className="text-lg font-bold leading-1.2">
            Get your first meal for free!
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col ">
              <label htmlFor="firstName" className="text-sm">
                First name
              </label>
              <input
                type="text"
                className="pb-1 bg-transparent outline-none border-b-1"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="firstName" className="text-sm">
                Last name
              </label>
              <input
                type="text"
                className="pb-1 bg-transparent outline-none border-b-1"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="firstName" className="text-sm">
              Email
            </label>
            <input
              type="email"
              className="pb-1 bg-transparent outline-none border-b-1"
            />
          </div>
          <button className="self-end px-3 py-1 text-white rounded-10 bg-primary border-1 text-normal border-primary">
            Join now
          </button>
        </form>
        <Image
          src="/assets/contact-us/food.png"
          alt="food table"
          width={330}
          height={440}
          className="object-cover rounded-3"
        />
      </div>
    </section>
  );
};