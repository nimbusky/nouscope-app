/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { motion, useAnimation } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { AiFillFire, AiFillMessage, } from 'react-icons/ai';
import {
  BsPlus,
  BsSearch,
  BsEyeFill,
  BsBookmarkFill,
  BsFillArrowLeftSquareFill,
  BsPeopleFill,
  BsTerminalFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { MdNightlightRound, MdFeedback } from 'react-icons/md';


const data = [
  {
    name: 'Discover',
    items: [
      {
        title: 'Popular',
        icon: AiFillFire,
      },
      {
        title: 'Most Upvoted',
        icon: IoMdArrowRoundUp,
      },
      {
        title: 'Best Discussions',
        icon: AiFillMessage,
      },
      {
        title: 'Search',
        icon: BsSearch,
      },
    ]
  },
  {
    name: 'Manage',
    items: [
      {
        title: 'Bookmarks',
        icon: BsBookmarkFill,
      },
      {
        title: 'Reading history',
        icon: BsEyeFill,
      },
      {
        title: 'Focus Mode',
        icon: MdNightlightRound,
      },
      {
        title: 'Customize',
        icon: FaCog,
      },
    ]
  },
];

const datafooter = [

  {
    name: '',
    items: [
      {
        title: 'Docs',
        icon: BsBookmarkFill,
      },
      {
        title: 'Changelog',
        icon: BsTerminalFill,
      },
      {
        title: 'Feedback',
        icon: MdFeedback,
      },
      {
        title: 'Invite people',
        icon: BsPeopleFill,
      },
    ]
  },
];

export const SideBar= () => {

  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = () => {
    void controls.start({
      width: '250px',
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
      width: '55px',
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
    <div className='min-h-screen bg-black' >
      <Head>
        <title>Sidebar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div animate={controls} className='group flex relative flex-col py-10 max-w-[250px] min-h-screen border-r border-gray-700 duration-300 animate' >

        {active && <BsFillArrowLeftSquareFill onClick={showLess} className='hidden group-hover:block absolute top-10 -right-4 text-2xl text-white cursor-pointer' />}
        {!active && <BsFillArrowRightSquareFill onClick={showMore} className='absolute top-10 -right-4 text-2xl text-white cursor-pointer' />}

        <div className={`${active && 'border-green-400 border shadow-green-400/60 shadow-lg rounded-lg px-4'}   max-w-[220px] h-[120px] flex justify-center mx-2  flex-col mb-4`} >
          <motion.p animate={controlText} className='font-thin text-white text-md' >
            Get the content you need by creating a personal feed
          </motion.p>
          <button className='flex justify-center items-center py-2 my-2 w-full font-bold text-black bg-green-400 rounded-lg' >
            <BsPlus className='text-2xl' />
            <motion.p animate={controlText}  >
              Create me feed
            </motion.p>
          </button>
        </div>

        <div className='grow'>
          {data.map((group, index) => (
            <div key={index} className='my-2' >
              <motion.p animate={controlTitleText} className='mb-2 ml-4 text-sm font-bold text-gray-500' >{group.name}</motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className='flex py-1 px-4 cursor-pointer' >
                  <item.icon className='text-lg text-gray-500' />
                  <motion.p animate={controlText} className='ml-4 text-sm font-bold text-gray-400' > {item.title}</motion.p>
                </div>

              ))}
            </div>
          ))}
        </div>

        <div>
          {datafooter.map((group, index) => (
            <div key={index} className='my-2' >
              <motion.p animate={controlTitleText} className='mb-2 ml-4 text-sm font-bold text-gray-500' >{group.name}</motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className='flex py-1 px-4 cursor-pointer' >
                  <item.icon className='text-lg text-gray-500' />
                  <motion.p animate={controlText} className='ml-4 text-sm font-bold text-gray-400' > {item.title}</motion.p>
                </div>

              ))}
            </div>
          ))}
        </div>

      </motion.div>

    </div>
  );
};