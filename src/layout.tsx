import type { ReactNode } from "react";
import { Header } from "./components/layout/Header";

type RootLayoutProps = {
  children: ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="px-6 md:px-12 xl:px-30 flex flex-col max-w-[1440px] mx-auto">
      <Header />
      {children}
    </div>
  );
}
