import { Button } from "components/atoms/Button";
import { navItems } from "data";
import { useEffect, useRef, useState } from "react";
import Scrollspy from "react-scrollspy";

export const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const onClickHandler = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  useEffect(() => {
    const scrollHandler = () => {
      console.log("ok");
      if (navRef && navRef.current) {
        if (window.scrollY > navRef.current.clientHeight) {
          setIsScrolled(true);
          return;
        }
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 z-20 flex items-center justify-between min-w-full px-5 py-3 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      ref={navRef}
    >
      <h2 className="text-lg font-bold text-primary">Foodify</h2>

      <Scrollspy
        items={navItems.map((navItem) => navItem.id)}
        currentClassName={isScrolled ? "border-b-2 border-primary" : ""}
        className="flex justify-center gap-4 leading-2"
      >
        {navItems.map((navItem, i) => (
          <li
            className={`font-semibold  cursor-pointer text-md ${
              isScrolled ? "text-black" : "text-white"
            } `}
            onClick={() => onClickHandler(navItem.id)}
            key={i}
          >
            {navItem.text}
          </li>
        ))}
      </Scrollspy>

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
