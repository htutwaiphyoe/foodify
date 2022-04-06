import { Button } from "components/atoms/Button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 flex items-center justify-between min-w-full px-5 py-3 bg-transparent">
      <h2 className="text-lg font-bold text-primary">Foodify</h2>
      <ul className="flex justify-center gap-4">
        <li className="font-semibold text-white text-md">Menus</li>
        <li className="font-semibold text-white text-md">How it works</li>
        <li className="font-semibold text-white text-md">Services</li>
        <li className="font-semibold text-white text-md">Contact us</li>
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
