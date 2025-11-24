import type { ReactNode } from "react";
import { Header } from "./components/layout/Header";

type RootLayoutProps = {
  children: ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="px-6 md:px-12 flex flex-col">
      <Header />
      {children}
    </div>
  );
}
