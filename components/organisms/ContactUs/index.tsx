import Image from "next/image";
import { Button } from "components/atoms/Button";
import React from "react";

export const ContactUs = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="flex items-center justify-center p-3 sm:p-5"
      id="contact-us"
    >
      <div className="flex items-center justify-center gap-5 p-3 sm:p-4 bg-light rounded-3 sm:rounded-5 max-w-88">
        <form className="flex flex-col gap-3.5" onSubmit={onSubmitHandler}>
          <h2 className="text-md sm:text-lg font-bold leading-1.2">
            Get your first meal for free!
          </h2>
          <div className="grid gap-5 xs:grid-cols-2">
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
          <div className="self-end">
            <Button type="submit">Join now</Button>
          </div>
        </form>
        <figure className="hidden md:block">
          <Image
            src="/assets/contact-us/food.png"
            alt="food table"
            width={330}
            height={440}
            className="object-cover rounded-3"
          />
        </figure>
      </div>
    </section>
  );
};
