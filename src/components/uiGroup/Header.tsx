import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';

export const Header = () => {
  return (
    // <header className="sticky h-10 bg-white shadow">
    //   <div className="flex justify-between items-center h-16">
    //     <div className="flex justify-between items-center w-full">
    //       <nav className='px-8 mx-auto max-w-7xl'>
    //         <Link href="/">
    //           <Image width={30} height={30} src='/image/nimbusky.png'></Image>
    //         </Link>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
    <div className="fixed top-0 z-40 w-full bg-white border-b shadow-sm">
      <div className='flex justify-between p-2 xl:mx-auto'>
        <div className='relative w-12 h-8'>
          <Image alt="product" src='/images/nimbusky.png' layout='fill' objectFit='contain' />
        </div>
      
        <div className='flex justify-end items-center space-x-4'>
          <AiFillHeart className='h-6 cursor-pointer' />
  
          <AiFillHeart className='cursor-pointer'/>       
          <a href="#" className="block relative">
            <Image alt="profil" src="/images/avatar.jpg" className="object-cover mx-auto rounded-full" width={30} height={30}/>
          </a>
        </div>
      </div>
    </div> 

  );
};
