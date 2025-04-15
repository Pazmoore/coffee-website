import React from 'react'
import { GiCoffeeBeans } from "react-icons/gi";


const Navbar = () => {
    return (
      <section className='contain'>
        <nav className="flex items-center justify-between gap-4 py-11">
          <a href="#home" className='flex flex-wrap justify-between items-center gap-4 no-underline'>
            <GiCoffeeBeans className='text-5xl text-white'/>
            <h1 className='text-2xl font-bold'>Coffee Mate</h1>
          </a>
          <ul className="items-center gap-6 py-4 px-11 rounded-xl hidden text-base lg:flex xl:text-lg relative justify-center navlinks">
            <li><a href="#home" className='link'>Home</a></li>
            <li><a href="#about" className='link'>About</a></li>
            <li><a href="#menu" className='link'>Menu</a></li>
            <li><a href="#reviews" className='link'>Testimonials</a></li>
            <li><a href="#gallery" className='link'>Gallery</a></li>
            <li><a href="#contact" className='link'>Contact</a></li>
          </ul>
        </nav>
      </section>
    );
  };
  
export default Navbar;
  

