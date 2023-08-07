import Link from 'next/link';
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

const Menu = () => {

  return (
    <div className='p-4  lg:px-20 xl:px-40 min-h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center '>
      {
        menu.map((value) => {
          return (
            <Link href={`/menu/${value.slug}`} key={value.id} className='w-full  min-h-1/2  p-12  pb-6 imagesImg' style={{ backgroundImage: `url(${value.img})` }}>
              <div className=" ">
                <h1 className='text-3xl uppercase '>{value.title} </h1>
                <p className='mt-4'>{value.desc} </p>
                <button type="button" className='bg-red-500 px-8 mt-2 py-2'>Explore</button>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Menu
