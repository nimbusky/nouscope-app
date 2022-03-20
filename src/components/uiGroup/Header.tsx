import Image from 'next/image';
import { AiFillBell } from 'react-icons/ai';

export const Header = () => {
  return (
    <div className='flex sticky top-0 z-50 justify-between items-center py-2 px-4 bg-white shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Image 
          alt='product'
          src = '/images/nouscope.png'
          width={30}
          height={30}
          layout='fixed'
        /> 
      </div>
    

      {/* Center */}
    

      {/* Right */}
      <div className='flex items-center space-x-5'>
        
        <AiFillBell className='icon' />
        
        {/* Profile pic */}
        <Image 
          alt="profil" 
          src="/images/avatar.jpg" 
          className="rounded-full" 
          width={40} 
          height={40}
          layout='fixed'
        />
        
      </div>

    </div>

  );
};
