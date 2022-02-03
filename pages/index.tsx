import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  grid 
  gap-5 
  space-y-5 
bg-slate-400 
  py-20 
  px-10
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

const Button = tw.div`
  mx-auto 
  mt-5 
  w-2/4 
  rounded-xl 
  bg-blue-500 
  p-3 
  text-center 
  text-white
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
  <div className='overflow-hidden rounded-3xl bg-white shadow-xl'>
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
  </div>
);

const Home: NextPage = () => {
  return (
    <Container>
      <Receipt />
      <Profile />
    </Container>
  );
};

export default Home;
