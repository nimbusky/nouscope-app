// import Link from "next/link";
import { ReactNode } from "react";

import { Header } from "@/components/uiGroup/Header";
import { SideBar } from "@/components/uiGroup/Sidebar";

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <nav className="flex p-2 font-bold text-white bg-red-500 flex-rows">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
      </nav> */}
      
      <div className='flex flex-col flex-1 h-full md:flex-row'>
        <Header />
        <SideBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

type Props = {
  children?: ReactNode;
};


