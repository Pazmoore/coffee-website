import React from 'react';
import { SiCoffeescript } from "react-icons/si";

const Home = () => {
  return (
    <section className='contain'>
        <div className='mt-10 flex flex-wrap justify-center lg:justify-between items-center gap-4'>
            <div className='flex flex-col flex-wrap gap-4'>
                <h1 className='text-5xl font-bold'>Best Coffee</h1>
                <div className='w-full max-w-[500px]'>
                    <p className='text-xl'>Make your day great with our special coffee.</p>
                    <p className='text-sm'>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-10'>
                    <button className='bg-[#fbe0cf] text-[#b66969]  text-center h-10 font-bold p-10 text-lg rounded-full shadow-md hover:bg-[#f6eee9] transition-all flex items-center gap-2'>Order Now</button>
                    <button className='text-[#b66969]  text-center h-10 font-bold p-10 text-lg rounded-full shadow-md hover:bg-[#f6eee9] transition-all flex items-center gap-2'>Contact Us</button>
                </div>
            </div>
            <SiCoffeescript className='w-full max-w-[25rem] h-[20rem]'/>
        </div>
    </section>
  )
}

export default Home