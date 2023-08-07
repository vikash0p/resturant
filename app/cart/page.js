import Image from 'next/image';
import React from 'react'

const menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "https://purepng.com/public/uploads/thumbnail//cheese-macronies-u1k.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "https://purepng.com/public/uploads/thumbnail//purepng.com-fast-food-burgerburgerfast-foodhammeatfast-food-burgermc-donaldsburger-king-231519340189pqxhr.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "https://purepng.com/public/uploads/thumbnail//purepng.com-pizzafood-pizza-941524636566fxdsp.png",
    color: "white",
  },
];

const Cart = () => {
  return (
    <div className='flex mt-5 md:mt-0 min-h-[70vh] justify-center items-center flex-col md:flex-row '>
      <div className='flex-1 ps-6'>
        {menu.map(menu => {
          return (
            <div key={menu.id} className='flex gap-10' >
              <Image src={menu.img} width={100} height={100} alt='images' />
              <div>
                <h3>{menu.title} </h3>
                <h5> large</h5>
              </div>
              <div> 55</div>
              <div>x</div>
            </div>
          )
        })}
      </div>
      <div className='flex-1 bg-fuchsia-100 text-red-500 w-full h-full py-20'>
        <div className="flex justify-evenly ">
          <div className='flex flex-col gap-2'>
            <h1>Subtotal(3 items) </h1>
            <h1>Services Cost </h1>
            <h1>DeliveryCost </h1>
          </div>
          <div className='flex flex-col gap-2' >
            <h1>$81.00</h1>
            <h1>$0.00</h1>
            <h1 className='text-green-600'>Free</h1>
          </div>
        </div>
        <div>
        <hr className='my-3 bg-white text-white h-1' />
        </div>
        <div className="flex justify-evenly ">
          <div className='flex flex-col gap-2'>
            <h1>Subtotal(3 items) </h1>
           
          </div>
          <div className='flex flex-col gap-2' >
            <h1>$81.00</h1>
           
          </div>
        </div>
      


      </div>
    </div>
  )
}

export default Cart
