import React from 'react'
import { FaLocationDot, FaPhone, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='bg-white text-black p-5'>
        <div className='flex flex-col flex-wrap gap-4 justify-center items-center mb-4 mt-4'>
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <div className='border-b-4 border-[#cf8989] w-20 inline-block rounded-3xl'></div>
            <p className='text-sm w-full max-w-[700px] text-center'>Coffee House in Berndorf, Germany, we will like to hear from you.</p>
        </div>
        <div className='flex flex-wrap justify-around items-center gap-4 mt-10'>
            <div className='flex flex-col flex-wrap justify-start items-start gap-4 lg:gap-12'>
                <div className="flex items-center gap-2">
                    <FaLocationDot className='text-2xl text-red-700'/>
                    <span className='text-xl font-semibold'>Berndorf, Germany</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaPhone className='text-2xl text-blue-700'/>
                    <span className='text-xl font-semibold'>+49 1512 3456789</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaEnvelope className='text-2xl text-orange-500'/>
                    <span className='text-xl font-semibold'>coffeemate@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaInstagram className='text-2xl text-pink-700'/>
                    <span className='text-xl font-semibold'>@coffeemate</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaXTwitter className='text-2xl text-gray-600'/>
                    <span className='text-xl font-semibold'>@coffeemate</span>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full max-w-[700px]'>
                <input
                    type="text"
                    placeholder="Name."
                    required
                    className="w-full p-2 h-16 mt-1 bg-[#debbbb] text-white rounded-md border border-white  focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                    type="email"
                    placeholder="Email."
                    required
                    className="w-full h-16 p-2 mt-1 bg-[#debbbb] text-white rounded-md border border-white  focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <textarea
                    placeholder="Write Your Message"
                    className="w-full p-2 mt-1 bg-[#debbbb] text-white rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-gray-400 h-[140px]"
                ></textarea>
                <button className='bg-[#fbe0cf] text-[#b66969] w-full max-w-[130px] text-center h-8 font-bold p-8 text-lg rounded-3xl shadow-md hover:bg-[#f6eee9] transition-all flex items-center gap-2'>Send</button>
            </div>
        </div>
    </section>
  )
}

export default Contact
