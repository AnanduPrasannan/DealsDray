import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Body from '../components/Body'

const Home = () => {
  
  return (
 <div>
  <div className='flex flex-col min-h-screen border border-red-700 container mx-auto'>
    <Header/>
    <Hero/>
    <Body />
  </div>
 </div>
  )
}

export default Home





