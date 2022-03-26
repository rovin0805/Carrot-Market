import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Seo from '@components/seo';
import { SWRConfig } from 'swr';
import Script from 'next/script';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <div className='mx-auto w-full max-w-xl'>
        <Seo />
        <Component {...pageProps} />
      </div>
      {/* <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          window.fbAsyncInit = function () {
            FB.init({
              appId: "your-app-id",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v13.0",
            });
          };
        }}
      /> */}
    </SWRConfig>
  );
}

export default MyApp;
