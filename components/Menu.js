"use client"
import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  {
    id: 1,
    title: 'HomePage',
    href: '/'
  },
  {
    id: 2,
    title: 'Menu',
    href: '/menu'
  },
  {
    id: 3,
    title: 'Working Hours',
    href: '/'
  },
  {
    id: 4,
    title: 'Conact',
    href: '/'
  },
]

const Menu = () => {
  const [open, setOpne] = useState(false);
  const users=false;

  return (
    <>
      <div className='transition:all 2s ease-in ' onClick={() => setOpne((prev) => !prev)}>
        {
          open ? <AiOutlineClose className='w-7 h-7' /> : <BiMenuAltLeft className='w-7 h-7' />

        }
      </div>
      {
        open && (
          <div className='bg-red-500 text-white  absolute top-24 left-0 h-screen flex flex-col w-full gap-8 pt-9 text-2xl items-center' onClick={()=>setOpne((prev)=>!prev)}>

          {
            links.map((value) => {
              return (
                <Link href={value.href} key={value.id} >{value.title} </Link>
              )
            })
          }
          {
            !users ? <Link href={"/login"} >Login</Link> : <Link href={"/login"} >Order</Link>
          }
        
            <CartIcon/>
          
  
        </div>
        )
      }
     
    </>

  )
}

export default Menu