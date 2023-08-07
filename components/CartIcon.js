import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartIcon = () => {
  return (
    <>
      <Link href='/cart' className='flex gap-2'>
        <AiOutlineShoppingCart className='w-8 h-8 ' />
        <span>Cart(3)</span>
      </Link>
    </>
  )
}

export default CartIcon
