import About from '@/components/About'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <main>
      <>
      <Hero />
      <About/>
      <Skills />
      <Portfolio />
      <Testimonial />
      </>
    </main>
  )
}

export default Home