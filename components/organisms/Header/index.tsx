export const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-center w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover hero-bg">
      <div className="mt-3 text-center w-80">
        <h1 className="text-xl font-bold text-white leading-1.2 mb-3">
          Order favorite meals, delivered hot and fresh to your door
        </h1>
        <button className="px-3 py-1 text-white rounded-full bg-primary border-1 text-normal border-primary">
          Order now
        </button>
      </div>
    </header>
  );
};
