import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  grid 
  gap-5 
  space-y-5 
bg-slate-400 
  py-20 
  px-10
  min-h-screen
`;

const Box = tw.div`
  rounded-3xl
bg-white
  p-6
  shadow-xl
`;

const SelectItem = tw.div`
  text-3xl 
  font-semibold
  mb-2
`;

const Item = tw.div`
  mb-1 
  flex 
  justify-between
`;

const ItemName = tw.div`
  text-gray-500
`;

const ItemPrice = tw.div`
  font-semibold
`;

const TotalBox = tw.div`
  mt-2 
  flex 
  justify-between 
  border-t-2 
  border-dashed 
  pt-2
`;

const Button = tw.button`
  mx-auto 
  mt-5 
  w-2/4 
  rounded-xl 
  bg-blue-500 
  p-3 
  text-center 
  text-white
  block
hover:bg-teal-500 
hover:text-black
active:bg-yellow-500 
focus:bg-red-500
`;

const Receipt = () => (
  <Box>
    <SelectItem>Select Item</SelectItem>
    <Item>
      <ItemName>Grey Chair</ItemName>
      <ItemPrice>$19</ItemPrice>
    </Item>
    <Item>
      <ItemName>Grey Chair</ItemName>
      <ItemPrice>$19</ItemPrice>
    </Item>
    <TotalBox>
      <span>Total</span>
      <ItemName>$10</ItemName>
    </TotalBox>
    <Button>Checkout</Button>
  </Box>
);

const Profile = () => (
  <Box>
    <div className='bg-blue-500 p-6 pb-14'>
      <span className='text-2xl text-white'>Profile</span>
    </div>
    <div className='relative -top-5 rounded-3xl bg-white p-6'>
      <div className='relative -top-16 flex items-end justify-between'>
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-500'>Orders</span>
          <span className='font-medium'>340</span>
        </div>
        <div className='h-24 w-24 rounded-full bg-red-400' />
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-500'>Spent</span>
          <span className='font-medium'>$340</span>
        </div>
      </div>
      <div className='relative  -mt-10 -mb-5 flex flex-col items-center'>
        <span className='text-lg font-medium'>Tony Molloy</span>
        <span className='text-sm text-gray-500'>미국</span>
      </div>
    </div>
  </Box>
);

const Shopping = () => (
  <Box>
    <div className='mb-5 flex items-center justify-between'>
      <span>⬅️</span>
      <div className='space-x-3'>
        <span>⭐️ 4.9</span>
        <span className='rounded-md p-2 shadow-xl'>💖</span>
      </div>
    </div>
    <div className='mb-5 h-72 bg-zinc-400' />
    <div className='flex flex-col'>
      <span className='text-xl font-medium'>Swoon Lounge</span>
      <span className='text-xs text-gray-500'>Chair</span>
      <div className='mt-3 mb-5 flex items-center justify-between'>
        <div className='space-x-2'>
          <button className='h-5 w-5 rounded-full bg-yellow-500' />
          <button className='h-5 w-5 rounded-full bg-indigo-500' />
          <button className='h-5 w-5 rounded-full bg-teal-500' />
        </div>
        <div className='flex items-center space-x-5'>
          <button className=' flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500'>
            -
          </button>
          <span>1</span>
          <button className=' flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500'>
            +
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <span className='text-2xl font-medium'>$450</span>
        <button className='rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white'>
          Add to cart
        </button>
      </div>
    </div>
  </Box>
);

const Home: NextPage = () => {
  return (
    <Container>
      <Receipt />
      <Profile />
      <Shopping />
    </Container>
  );
};

export default Home;
