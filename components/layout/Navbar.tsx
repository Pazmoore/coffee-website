import React from 'react'
import Link from "next/link";
import { GiCoffeeBeans } from "react-icons/gi";


const Navbar = () => {
  return (
    <section className='contain'>
        <nav className="flex items-center justify-between gap-4 py-11">
            <Link href={"/"} className='flex flex-wrap justify-between items-center gap-4 no-underline'>
                <GiCoffeeBeans className='text-5xl text-white'/>
                <h1 className='text-2xl font-bold'>Coffee Mate</h1>
            </Link>
            <ul className="items-center gap-6 py-4 px-11 rounded-xl hidden text-base lg:flex xl:text-lg relative justify-center navlinks">
                <li>
                    <Link href={"/"} className='link'>Home</Link>
                </li>
                <li>
                    <Link href={"/about"} className='link'>About</Link>
                </li>
                <li>
                    <Link href={"/menu"} className='link'>Menu</Link>
                </li>
                <li>
                    <Link href={"/testimonals"} className='link'>Testimonals</Link>
                </li>
                <li>
                    <Link href={"/gallery"} className='link'>Gallery</Link>
                </li>
                <li>
                    <Link href={"/contact"} className='link'>Contact</Link>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar