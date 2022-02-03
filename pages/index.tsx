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

const Home: NextPage = () => {
  return (
    <Container>
      <Box>
        <SelectItem>Select Item</SelectItem>
        <Item>
          <ItemName>Grey Chair</ItemName>
          <ItemPrice>$19</ItemPrice>
        </Item>
        <Item className='my-0'>
          <ItemName>Grey Chair</ItemName>
          <ItemPrice>$19</ItemPrice>
        </Item>
        <TotalBox>
          <span>Total</span>
          <ItemName>$10</ItemName>
        </TotalBox>
        <Button>Checkout</Button>
      </Box>
    </Container>
  );
};

export default Home;
