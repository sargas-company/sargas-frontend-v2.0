import type { ReactNode } from "react";
import { Header } from "./components/layout/Header";

type RootLayoutProps = {
  children: ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col px-6 md:px-12">
        <Header />
      {children}
    </div>
  );
}
