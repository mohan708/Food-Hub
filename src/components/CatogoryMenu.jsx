import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/Slice/CategorySlice';

const CatogoryMenu = () => {

const [categories,setCategories] =useState([]);

const listUniqueCategories = ()=>{
  const uniqueCategories = [... new Set(FoodData.map((food)=> food.category ))]

  setCategories(uniqueCategories);
  console.log(uniqueCategories);
}

useEffect( ()=>{
  listUniqueCategories();
},[]
)
const dispatch = useDispatch();
const selectedCategory = useSelector((state)=> state.category.category)



  return (  
        <div class='ml-6'>
          <h3 class='text-2xl font-bold'>Find the best food</h3>
            <div class='my-5 flex gap-2 overflow-x-scroll scroll-smooth'>
                <button onClick={()=> dispatch(setCategory ("All"))}  
                 class={`border px-3 py-2 rounded-md font-bold hover:bg-green-600 hover:text-cyan-50 cursor-pointer bg-slate-200  ${selectedCategory === "All" && 'bg-green-600 text-white'}`}>All</button>

                

                 {
                  categories.map((category,index)=>{

                    return(
                           
                      <button onClick={()=> dispatch(setCategory(category))}  key={index}  class={`border px-3 py-2 rounded-md font-bold hover:bg-green-600 hover:text-cyan-50 cursor-pointer bg-slate-200 ${selectedCategory === category && 'bg-green-600 text-white'}`}>{category}</button>

                    )

                  })
                 }


            </div>       
    </div>
  )
}

export default CatogoryMenu