import Link from 'next/link';
import React from 'react'
import { GrRestaurant } from 'react-icons/gr';
import Menu from './Menu';
import CartIcon from './CartIcon';
import { BsTelephone } from 'react-icons/bs';


const Navbar = () => {
  const user=false;
  return (
    <section className='h-12  p-4 flex text-red-500 z-50 justify-between bg-fuchsia-100 items-center border-b-2 border-b-red-500 uppercase  sticky top-0 left-0 right-0'>
      <div className='hidden md:flex gap-4'>
        <Link href={'/'}>HomePage</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/login'}>Contact</Link>
      </div>
      <div className='' >
        <Link href={"/"}  ><GrRestaurant className='h-8 w-8' /></Link>
      </div>
      <div className='md:hidden'>
        <Menu/>
      </div>
      <div className='hidden md:flex gap-6 items-center'>
        <div className='flex items-center gap-2 cursor-pointer rounded-md  bg-orange-300 px-2'>
          <BsTelephone/>
          <div>123 45 678</div>
        </div>
        {
          !user ?<Link href={'/login'}>Login</Link> : <Link href={'/order'}>Orders</Link>
        }
        <CartIcon/> 
      </div>
    </section>
  )
}

export default Navbar