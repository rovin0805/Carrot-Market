import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Seo from '@components/seo';
import { SWRConfig } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <div className='mx-auto w-full max-w-xl'>
        <Seo />
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
