import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Seo from '@components/seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='mx-auto w-full max-w-xl'>
      <Seo />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
