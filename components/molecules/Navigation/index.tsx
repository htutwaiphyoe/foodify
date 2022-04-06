import { Button } from "components/atoms/Button";
import { navItems } from "data";

export const Navigation = () => {
  const onClickHandler = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };
  return (
    <nav className="fixed top-0 left-0 z-10 flex items-center justify-between min-w-full px-5 py-3 bg-transparent">
      <h2 className="text-lg font-bold text-primary">Foodify</h2>
      <ul className="flex justify-center gap-4">
        {navItems.map((navItem, i) => (
          <li
            className="font-semibold text-white cursor-pointer text-md"
            onClick={() => onClickHandler(navItem.id)}
            key={i}
          >
            {navItem.text}
          </li>
        ))}
      </ul>
      <ul className="flex justify-center gap-2">
        <li>
          <Button type="outline">Sign in</Button>
        </li>
        <li>
          <Button type="submit">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};
