import { Navigation } from "components/molecules/Navigation";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full min-h-screen bg-center bg-no-repeat bg-cover hero-bg">
      <Navigation />
    </header>
  );
};
