import React from 'react'
import { GiCoffeeBeans } from "react-icons/gi";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <section className='bg-black text-white p-2'>
        <div className='flex flex-wrap justify-around items-center gap-1'>
            <Link href={"/"} className='flex flex-wrap justify-between items-center gap-4 no-underline'>
                <GiCoffeeBeans className='text-5xl text-white'/>
                <h1 className='text-2xl font-bold'>Coffee Mate</h1>
            </Link>
            <div className="flex gap-1 p-2">
                {[
                    { icon: FaInstagram, hover: "hover:text-pink-700" },
                    { icon: FaXTwitter, hover: "hover:text-gray-700" },
                    { icon: FaYoutube, hover: "hover:text-gray-700" },
                    { icon: FaFacebook, hover: "hover:text-gray-700" },
                ].map(({ icon: Icon, hover }, index) => (
                    <div key={index} className="p-1 rounded-xl bg-[#FFFFFF]">
                        <Icon className={`text-black text-lg transition ${hover}`} />
                    </div>
                ))}
            </div>
            <div className="text-center text-sm text-gray-500">
                &copy; 2025 Your Company Name. All rights reserved.
            </div>
        </div>
    </section>
  )
}

export default Footer