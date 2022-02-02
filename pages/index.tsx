import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>
      <h1 className='text-black'>it works</h1>
      <button className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
        button
      </button>
    </div>
  );
};

export default Home;
