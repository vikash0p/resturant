import Link from 'next/link'
import React from 'react'
import { GrRestaurant } from 'react-icons/gr';


const Footer = () => {
  return (
    <div className='flex  bg-red-100 justify-between px-2 items-center h-12'>
       <div className='' >
        <Link href={"/"}  ><GrRestaurant className='h-8 w-8' /></Link>
      </div>
      <div>
        @ All RIGHT RESERVED.
      </div>
    </div>
  )
}

export default Footer
