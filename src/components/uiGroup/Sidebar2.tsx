import { AiFillHome } from 'react-icons/ai';
import { FaBookOpen, FaCog } from 'react-icons/fa';
import { GiStairs } from 'react-icons/gi';
import { IoTelescope } from 'react-icons/io5';

import type { FC } from "react";

type Props = {
  icon: any;
  text: string;
};

export const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<AiFillHome size="28" />} text='ホーム' />
        <Divider />
        <SideBarIcon icon={<IoTelescope size="32" />} text='性格分析'/>
        <SideBarIcon icon={<FaBookOpen size="20" />} text='自己分析' />
        <SideBarIcon icon={<GiStairs size="20" />} text='目標設定'/>
        <Divider />
        <SideBarIcon icon={<FaCog size="22" />} text='アカウント設定' />
    </div>
  );
};

const SideBarIcon:FC<Props> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { icon, text} = props; 
  return (
  <div className="text-green-500 hover:text-white
  bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
    group relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto  
    hover:rounded-xl rounded-3xl
    transition-all duration-300 ease-linear
    cursor-pointer shadow-lg">
    {icon}
    <span className="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-left">
      {text}
    </span>
  </div>
  );
};


const Divider = () => <hr className="sidebar-hr" />;

