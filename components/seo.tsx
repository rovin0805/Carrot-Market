import Head from 'next/head';
import { useRouter } from 'next/router';

interface IPathName {
  [key: string]: string;
}

export default function Seo() {
  const router = useRouter();
  const pathNames: IPathName = { '/': 'Home' };
  return (
    <Head>
      <title>{pathNames[router.pathname] || 'Carrot Market'}</title>
    </Head>
  );
}
