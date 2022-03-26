import type { NextPage } from 'next';
import FloatingButton from '@components/floating-button';
import Item from '@components/item';
import Layout from '@components/layout';
import useUser from '@libs/client/useUser';
import useSWR, { SWRConfig } from 'swr';
import { Product } from '@prisma/client';
import client from '@libs/server/client';

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
}

const Home = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>('/api/products');

  return (
    <Layout title='홈' hasTabBar>
      <div className='flex flex-col space-y-5 divide-y'>
        {data
          ? data?.products?.map((product) => (
              <Item
                id={product.id}
                key={product.id}
                title={product.name}
                price={product.price}
                hearts={product._count?.favs || 0}
              />
            ))
          : 'Loading...'}
        <FloatingButton href='/products/upload'>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

const HomeWrapper: NextPage<{ products: ProductWithCount[] }> = ({
  products,
}) => (
  <SWRConfig
    value={{
      fallback: {
        '/api/products': {
          ok: true,
          products,
        },
      },
    }}
  >
    <Home />
  </SWRConfig>
);

// 로딩 상태없이 서버단에서 데이터를 다 받아온 후에 유저에게 한번에 보여줌.
export async function getServerSideProps() {
  const products = await client.product.findMany({});
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default HomeWrapper;
