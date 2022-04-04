import { Navigation } from "components/molecules/Navigation";
import { Header } from "components/organisms/Header";
import { Menu } from "components/organisms/Menu";
import { Popular } from "components/organisms/Popular";

export const HomeTemplate = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Menu />
      <Popular />
    </>
  );
};
