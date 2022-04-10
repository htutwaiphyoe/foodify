import { IoSearchOutline } from "react-icons/io5";
import { Button } from "components/atoms/Button";

export const Search = () => {
  return (
    <article className="flex flex-wrap items-center justify-center gap-4 px-3 py-4 xs:px-5 md:justify-between">
      <div>
        <h2 className="mb-1 text-lg font-bold text-center md:text-left leading-1">
          Here is our best menus
        </h2>
        <p className="text-center md:text-left">
          We provide wide variety of food with best quality.
        </p>
      </div>
      <div className="w-full xs:w-50  py-1.6 xs:py-0.5 pr-0.5 pl-2 rounded-10 border-gray border-1 flex items-center justify-between">
        <IoSearchOutline className="text-placeholder text-20" />
        <input
          type="text"
          placeholder="Explore your favorite meals..."
          className="flex-1 mx-1 outline-none"
        />
        <div className="hidden xs:block">
          <Button type="submit">Search</Button>
        </div>
      </div>
      <div className="block -mt-2 xs:hidden">
        <Button type="submit">Search</Button>
      </div>
    </article>
  );
};
