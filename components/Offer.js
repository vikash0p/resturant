
import Image from 'next/image'
import React from 'react'


const Offer = () => {
    return (
        <div className='bg-black h-screen  flex flex-col md:flex-row'>
            <div className='flex-1 text-white flex flex-col justify-center items-center gap-4 ps-3 text-center md:gap-8 '>
                <h1 className=' text-4xl  md:text-6xl'>Delicious burger with Some Mayonnaise.</h1>
                <p className='text-xl md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos nemo expedita voluptas veniam!</p>
            
                <button type='button' className='px-5 py-2 bg-red-500 text-white '>Order Now</button>
            </div>
            <div className='flex-1 w-full relative'>
                <Image src="https://purepng.com/public/uploads/thumbnail//purepng.com-fast-food-burgerburgerfast-foodhammeatfast-food-burgermc-donaldsburger-king-231519340225vr5ju.png" fill alt='images' className='object-contain' />
            </div>
        </div>
    )
}

export default Offer
