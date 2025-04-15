import Arrow from '@/components/layout/Arrow'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Gallery from '@/components/pages/Gallery'
import Home from '@/components/pages/Home'
import Menu from '@/components/pages/Menu'
import Reviews from '@/components/pages/Reviews'
import React from 'react'

const page = () => {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="menu"><Menu /></section>
      <section id="reviews"><Reviews /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
      <Arrow/>
    </>
  )
}

export default page