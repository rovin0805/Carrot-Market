import Document, { Head, Html, Main, NextScript } from 'next/document';

// _document component vs _app component
// _app : 유저가 페이지를 불러올 때마다 브라우저에서 실행됨.
// _document : 서버에서 한 번만 실행됨. => NextJS 앱의 html 뼈대를 짜주는 역할

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          {/* Need to use ONLY google font */}
          <link
            href='https://fonts.googleapis.com/css2?family=Cute+Font&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main /> {/* => _app component rendered */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
