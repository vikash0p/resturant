"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';


const data = [
    {
        id: 1,
        title: '“There’s no better feeling in the world than a warm pizza box in your lap.”',
        img: '/images/pizza.jpg'
    },
    {
        id: 2,
        title: '"You cant buy happiness. But you can buy pizza, and that kind of the same thing." ',
        img: '/images/pizza1.jpg'
    },
    {
        id: 3,
        title: '“I love pizza. I want to marry it but it would just be to eat her family at the wedding.”',
        img: '/images/pizza2.jpg'
    },
]


export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="bg-fuchsia-100 w-full min-h-[70vh] ">
                {
                    data.map((value) => {
                        return (
                            <SwiperSlide className='' key={value.id}>
                                <div className='flex  flex-col justify-around px-8 items-center  md:flex-row'>
                                    <div className='flex-1'>
                                    <h1 className='text-3xl m-5 md:mb-0 md:text-5xl '>{value.title} </h1>
                                    <Link href='/'>
                                    <button className='bg-red-500 text-white px-8 py-2 md:py-3  m-5 '>Order now</button>
                                    </Link>
                                    </div>
                                    
                                    <div className='flex-1 md:pt-5  '>
                                    <Image src={value.img}  alt='images pizza' width={600} priority height={600}></Image>
                                    </div>
                                    
                                </div>

                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </>
    );
}
