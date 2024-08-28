import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/index.css'
import CatogoryMenu from '../components/CatogoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
   <>
   <Navbar />
   <CatogoryMenu />
   <FoodItems />
   <Cart />
   </>
  )
}

export default Home