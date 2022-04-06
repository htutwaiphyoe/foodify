import { Search } from "components/molecules/Search";
import { ImageGrid } from "components/molecules/ImageGrid";
import { Popular } from "components/organisms/Popular";

export const Menu = () => {
  return (
    <section id="menu">
      <Search />
      <ImageGrid />
      <Popular />
    </section>
  );
};
