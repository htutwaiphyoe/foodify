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
          <button className="px-3 py-1 bg-transparent rounded-full border-1 text-normal border-primary text-primary">
            Sign in
          </button>
        </li>
        <li>
          <button className="px-3 py-1 text-white rounded-full bg-primary border-1 text-normal border-primary">
            Sign up
          </button>
        </li>
      </ul>
    </nav>
  );
};
