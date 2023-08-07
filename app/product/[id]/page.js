"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Small",
  },
  {
    id: 2,
    title: "Medium",
  },
  {
    id: 3,
    title: "Large"
  }
]

const SingleProductPage = ({ params }) => {
  const [selected, setSelect] = useState(0);
  const [quantity, setQuantity] = useState(1); 
 
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen gap-7 flex flex-col justify-around text-red-500 md:flex-row'>
      <div className="relative w-96 h-96 flex-1">
        <Image src='https://purepng.com/public/uploads/thumbnail//purepng.com-fast-food-burgerburgerfast-foodhammeatfast-food-burgermc-donaldsburger-king-231519340201yebxq.png' alt='pngImage' className='object-contain' fill />
      </div>
      <div className="flex-1 gap-6 md:mt-10">
        <h1 className='text-3xl font-bold uppercase mt-6'>Title</h1>
        <h5 className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum debitis vel, obcaecati itaque necessitatibus dolore, suscipit perferendis odit nam impedit, ipsa numquam? Iusto labore earum, consequatur nisi cum voluptates.</h5>
        <p className='mt-6 text-2xl'>$ 56</p>
        <div className='mt-6'>
          {
            data.map((value, index) => {
              return (
                <button type="button" key={value.id} className='min-w-[6rem] px-4 py-2 ring-red-500 rounded-md' style={{
                  background: selected === index ? "#ef4444" : "white",
                  color: selected === index ? "white" : "black"
                }} onClick={() => setSelect(index)}>{value.title} </button>
              )
            })
          }
        </div>
        <div className='flex gap-3 justify-start mt-7 items-center'>
        <span className='min-w-[10rem] bg-red-100  '>
          <button className='text-3xl px-5' onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>{"<"} </button>
          <span className='text-3xl'> {quantity} </span>
          <button className='text-3xl px-5' onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}>{">"} </button>
        </span>
        <span>
          <button type="submit" className='uppercase  px-8 py-1 -mt-3 bg-red-500 text-white ring-1  ring-red-500'>Add To Cart</button>
        </span>
        </div>
        


      </div>

    </div>
  )
}

export default SingleProductPage
