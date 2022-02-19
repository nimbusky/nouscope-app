// eslint-disable-next-line import/order
import { SideBar } from '@/components/uiGroup/Sidebar';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex'>
      <SideBar />
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
