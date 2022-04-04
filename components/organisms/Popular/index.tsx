import { DishCard } from "components/molecules/DishCard";

export const Popular = () => {
  return (
    <section className="py-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Popular Dishes</h2>
        <p>We analyze the food rankings for better services</p>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </section>
  );
};
