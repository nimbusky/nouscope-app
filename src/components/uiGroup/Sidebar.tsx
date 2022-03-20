/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiRightArrow , BiLeftArrow } from 'react-icons/bi';
import { FaBookOpen, FaCog } from 'react-icons/fa';
import { GiStairs } from 'react-icons/gi';
import { IoTelescope } from 'react-icons/io5';


const data = [
  {
    name: '',
    items: [
      {
        title: 'ホーム',
        icon: AiFillHome,
        url: '/home'
      },
      {
        title: '性格分析',
        icon: IoTelescope,
        url: '/personality'
      },
      {
        title: '自己分析',
        icon: FaBookOpen,
        url: '/resume'
      },
      {
        title: '目標設定',
        icon: GiStairs,
        url: '/goal'
      },
    ]
  }
];

const datafooter = [
  {
    name: '',
    items: [
      {
        title: '設定',
        icon: FaCog,
      },
    ]
  }
];

export const SideBar= () => {

  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = () => {
    void controls.start({
      width: '200px',
      transition: { duration: 0.001 }
    });
    void controlText.start({
      opacity: 1,
      display: 'block',
      transition: {delay:0.3}
    });
    void controlTitleText.start({
      opacity: 1,
      transition: {delay:0.3}
    });

    setActive(true);
  };

  const showLess = () => {
    void controls.start({
      width: '62px',
      transition: { duration: 0.001 }
    });

    void controlText.start({
      opacity: 0,
      display: 'none',
    });

    void controlTitleText.start({
      opacity: 0,
    });

    setActive(false);

  };

  useEffect(() => {
    showMore();
  },[]);

  return (
    <div className=' bg-primary' >
      <motion.div animate={controls} className='group flex relative flex-col py-10 max-w-[250px] h-full border-r animate' >

        <div className='grow'>
          {data.map((group, index) => (
            <div key={index} className='my-2' >
              <motion.p animate={controlTitleText} className='mb-2 ml-4 text-lg font-bold text-gray-500' >{group.name}</motion.p>

              {group.items.map((item, index2) => (
                <Link href ={item.url} passHref key={index2} >
                  <div className='flex items-center py-2 px-4 hover:text-white hover:bg-gray-400 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'>
                    
                      <item.icon className=' text-theme-light' size={30} />
                      <motion.span animate={controlText} className='ml-4 font-bold text-theme-light' > {item.title}</motion.span>
                    
                  </div>
                </Link>

              ))}
            </div>
          ))}
        </div>
        <div>
          {datafooter.map((group, index) => (
            <div key={index} className='my-2' >
              <motion.p animate={controlTitleText} className='mb-2 ml-4 text-lg font-bold text-gray-500' >{group.name}</motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className='flex items-center py-2 px-4 hover:text-white hover:bg-gray-400 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer' >
                  <item.icon className='text-theme-light' size={30} />
                  <motion.span animate={controlText} className='ml-4 font-bold text-theme-light' > {item.title}</motion.span>
                </div>

              ))}
            </div>
          ))}
        </div>
        {/* サイドバーの開閉 */}
        {active && <BiLeftArrow onClick={showLess} className='ml-4 text-3xl text-white hover:text-primary hover:bg-white rounded-xl cursor-pointer' />}
        {!active && <BiRightArrow onClick={showMore} className='ml-4 text-3xl text-white hover:text-primary hover:bg-white rounded-xl cursor-pointer' />}
      </motion.div>
        
        

    </div>
  );
};
