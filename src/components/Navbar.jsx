import React from 'react'
import '../assets/index.css'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/Slice/SearchSlice'


const Navbar = () => {

  const dispatch = useDispatch()

  return (
   <nav class="flex  flex-col lg:flex-row justify-between py-3 mx-6 mb-10 flex-wrap">
    <div class=''>
        <h3 class='text-xl font-bold text-zinc-500' style={{ fontFamily: 'Poppins, sans-serif' }}>{new Date().toUTCString().slice(0,16)}</h3>
        <h1 class='text-2xl pt-1 font-bold ' style={{ fontFamily: 'Poppins, sans-serif' }}>Flavoro Foods</h1>
    </div>
    <div class='text-lg '>
        <input 
        class='border border-gray-400 items-center mt-6 lg:mt-0 outline-none p-2 text-gray-900 rounded-lg w-full lg:w-[25vw] ' 
        type="search" 
        name='search' 
        id='' 
        onChange={(e)=> dispatch(setSearch(e.target.value))}
        placeholder='search here.....' 
        autoComplete='off' />
    </div>
   </nav>
  )
}

export default Navbar