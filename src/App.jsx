import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Product from './Components/Product'
import Review from './Components/Review'
import Reviews from './Components/Reviews'
import Marque from './Components/Marque'
import Specs from './Components/Specs'

const App = () => {
  return (
    <div className='w-[100%] h-[100%] mx-auto'>
      <Navbar />
      <Product />
      <Specs />
      <Marque />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App