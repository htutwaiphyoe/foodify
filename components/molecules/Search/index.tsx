import { IoSearchOutline } from "react-icons/io5";

export const Search = () => {
  return (
    <article className="flex items-center justify-between px-5 py-4">
      <div>
        <h2 className="text-lg font-bold">Here is our best menus</h2>
        <p>We provide wide variety of food with best quality.</p>
      </div>
      <div className="w-50 py-0.5 pr-0.5 pl-2 rounded-full border-gray border-1 flex items-center justify-between">
        <IoSearchOutline className="text-placeholder text-20" />
        <input
          type="text"
          placeholder="Explore your favorite meals..."
          className="flex-1 mx-1 outline-none"
        />
        <button className="px-3 py-1 text-white rounded-full bg-primary border-1 text-normal border-primary">
          Search
        </button>
      </div>
    </article>
  );
};
