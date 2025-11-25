import { HeaderMenuButton } from "./HeaderMenuButton";

export const Header = () => {
  return (
    <header className="h-20 w-full fixed top-0 left-0 px-6 md:px-12 xl:px-30">
      <div className="h-full mx-auto flex justify-between items-center max-w-[1440px]">
        <a href="#" className="px-6 py-2.5 bg-white rounded-[22px] text-black">
          <strong>Hanzo</strong>
        </a>
        <HeaderMenuButton />
      </div>
    </header>
  );
};
