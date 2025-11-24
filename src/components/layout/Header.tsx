import { HeaderMenuButton } from "./HeaderMenuButton";

export const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center">
      <a href="#" className="px-6 py-2.5 bg-white rounded-[22px] text-black">
        <strong>Hanzo</strong>
      </a>
      <HeaderMenuButton />
    </header>
  );
};
