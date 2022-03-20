// import Link from "next/link";
import Head from "next/head";
import { FC, ReactNode } from "react";

import { Header } from "@/components/uiGroup/Header";
import { SideBar } from "@/components/uiGroup/Sidebar";

type Props = {
  title: string
  children?: ReactNode;
};

export const Layout: FC<Props> = ({title, children })=> {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className='flex flex-row flex-1 h-full'>
        <SideBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
    </div>
  );
};




