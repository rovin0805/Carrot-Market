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
  lg:grid-cols-2
  xl:grid-cols-3
  xl:place-content-center
`;

const Box = tw.div`
  rounded-3xl
bg-white
  dark:bg-black
  dark:text-white
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

const Receipt = ({ className }: { className?: string }) => (
  <Box className={`${className} flex flex-col justify-between`}>
    <SelectItem>Select Item</SelectItem>
    <ul>
      {[1, 2, 3, 4, 5].map((i) => (
        <Item key={i} className='odd:bg-blue-100 even:bg-green-100'>
          <ItemName>Grey Chair</ItemName>
          <ItemPrice>$19</ItemPrice>
        </Item>
      ))}
    </ul>
    {/* <ul>
      {['a', 'b', 'c', ''].map((c, i) => (
        <li key={i} className='bg-red-500 py-2 empty:hidden'>
          {c}
        </li>
      ))}
    </ul> */}
    <TotalBox>
      <span>Total</span>
      <ItemName>$10</ItemName>
    </TotalBox>
    <Button>Checkout</Button>
  </Box>
);

const Profile = () => (
  <div className='group overflow-hidden rounded-3xl bg-white shadow-xl'>
    <div className='p-6 pb-14 portrait:bg-blue-500 landscape:bg-teal-500'>
      <span className='text-2xl text-white'>Profile</span>
    </div>
    <div className='relative -top-5 rounded-3xl bg-white p-6'>
      <div className='relative -top-16 flex items-end justify-between'>
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-500'>Orders</span>
          <span className='font-medium'>340</span>
        </div>
        <div className='h-24 w-24 rounded-full bg-red-400 group-hover:bg-emerald-400' />
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-500'>Spent</span>
          <span className='font-medium'>$340</span>
        </div>
      </div>
      <div className='relative -mt-10 -mb-5 flex flex-col items-center'>
        <span className='text-lg font-medium'>Tony Molloy</span>
        <span className='text-sm text-gray-500'>미국</span>
      </div>
    </div>
  </div>
);

const Shopping = () => (
  <Box className='lg:col-span-2 xl:col-span-1'>
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
          <button className='h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2' />
          <button className='h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2' />
          <button className='h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2' />
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

const Form = () => (
  <Box>
    <form className='flex flex-col space-y-2 p-5 focus-within:bg-blue-500'>
      <input
        type='text'
        required
        placeholder='Username'
        className='peer border-cyan-700 required:border-2 invalid:bg-pink-300'
      />
      <span className='hidden peer-invalid:block peer-invalid:text-red-500'>
        This input is invalid
      </span>
      <span className='hidden peer-valid:block peer-valid:text-teal-500'>
        Awesome username
      </span>
      <input
        type='password'
        required
        placeholder='Password'
        className='placeholder-shown:text-cyan-600'
      />
      <input type='submit' value='Login' className='bg-white' />
    </form>
  </Box>
);

const More = () => (
  <Box>
    <details className='open:bg-violet-300 open:text-white'>
      <summary className='cursor-pointer select-none'>This is title</summary>
      <span className=' selection:bg-indigo-200 selection:text-white'>
        content
      </span>
    </details>
    <ul className='list-disc marker:text-rose-500'>
      <li>Hi</li>
      <li>Hi</li>
      <li>Hi</li>
    </ul>
    <input
      type='file'
      className='file:cursor-pointer file:rounded-xl file:border-0 file:bg-violet-400 file:p-1 file:text-white file:transition-colors file:hover:bg-purple-800'
    />
    <p className='first-letter:text-3xl first-letter:hover:text-purple-500'>
      Hello Tailwind
    </p>
  </Box>
);

const Home: NextPage = () => {
  return (
    <Container>
      <Receipt />
      <Profile />
      <Shopping />
      {/* <Form /> */}
      {/* <More /> */}
    </Container>
  );
};

export default Home;
