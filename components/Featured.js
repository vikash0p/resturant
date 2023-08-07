import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: 1,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pizzafood-pizza-941524625790txv4j.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
    {
        id: 2,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pizzafood-pizza-941524633822ntb7e.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
    {
        id: 3,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pizzafood-pizza-9415246443273fsfa.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
    {
        id: 4,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pizzafood-pizza-941524636566fxdsp.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
    {
        id: 5,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-fast-food-burgerburgerfast-foodhammeatfast-food-burgermc-donaldsburger-king-231519340201yebxq.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
    {
        id: 6,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-fast-food-burgerburgerfast-foodhammeatfast-food-burgermc-donaldsburger-king-231519340243txuwe.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
    {
        id: 7,
        img: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pizzafood-pizza-9415246443273fsfa.png',
        title: 'Sicilian',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse exercitationem, quibusdam amet dicta asperiores quaerat quos nisi sint laboriosam illo repudiandae. Assumenda amet numquam reprehenderit?',
        price: 34,
    },
]
const Featured = () => {
    return (
        <section className=' w-full overflow-x-scroll px-3'>
            <div className="w-max flex">
                {
                    data.map((value) => {
                        return (
                            <div className='w-screen h-[70vh] my-4 flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw]  xl:w-[33vw] xl:h-[80vh] ' key={value.id}>
                                <div className="flex-1 relative   w-full ">
                                    <Image src={value.img} alt='image' fill className='object-contain hover:rotate-[60deg] transition-all duration-500' />
                                </div>
                                <div className='flex-1 flex flex-col gap-4 justify-center items-center text-red-600'>
                                    <h1 className="text-xl font-bold uppercase md:text-2xl xl:text-3xl ">{value.title} </h1>
                                    <p className="">{value.text} </p>
                                    <h2 className="text-xl">${value.price} </h2>
                                    <button type='button' className='bg-red-500 px-5 py-2 text-black' >Add to Cart</button>
                                </div>
                            </div>
                        ) 
                    })
                }
            </div>

        </section>
    )
}

export default Featured
