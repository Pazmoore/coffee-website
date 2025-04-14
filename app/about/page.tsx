import React from 'react'
import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <section className='contain'>
        <div className='flex flex-wrap justify-between items-center gap-6'>
            <Image
                src="/images/date-1.jpeg"
                width={400}
                height={400}
                alt="AI Icon"
                className="w-full max-w-[20rem] h-[20rem] rounded-full"
            />
            <div className='flex flex-col flex-wrap justify-center items-center gap-4'>
                <h1 className="text-5xl font-bold">About Us</h1>
                <div className='border-b-4 border-[#b66969] w-20 inline-block rounded-3xl'></div>
                <p className='w-full max-w-[35rem] text-center'>At Coffee House in Berndorf, Germany, we pride ourselves on being a
                    go-to destination for coffee lovers and conversation seekers alike.
                    We're dedicated to providing an ERceptional coffee experience in a
                    cozy and inviting atmosphere, where guests can relax, unwind, and
                    enjoy their time in comfort.
                </p>
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
            </div>
        </div>
    </section>
  )
}

export default page