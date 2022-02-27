// import Link from "next/link";
import { ReactNode } from "react";

import { Header } from "@/components/uiGroup/Header";
import { SideBar } from "@/components/uiGroup/Sidebar";

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className='flex flex-1 h-full'>
        <SideBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

type Props = {
  children?: ReactNode;
};


