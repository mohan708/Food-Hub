import React, { useState } from 'react'
import FoodData from '../data/FoodData'
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slice/CartSlice';
 import toast from 'react-hot-toast';


const FoodCard = ({id,name,rating,desc,price,img,handleToast}) => {

  const dispatch = useDispatch()


  return (
    <>
          <div className="font-bold w-[250px] h-auto bg-white p-5 flex flex-col rounded-lg gap-2">
                <img class=' overflow-hidden h-[200px] bg-white  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt="" />
               <div class='flex justify-between text-sm bg-white mt-6'>
                  <p class='bg-white'>{name}...</p>
                  <p class='bg-white text-green-600'>₹ {price}</p>
                </div>
                <p class='flex  font-normal text-sm bg-white'>{desc.slice(0,50)}...</p>
                <div class='flex justify-between bg-white pt-2  items-center'>
                  <span className="flex justify-center items-center bg-white">
                    <AiFillStar className="mr-1 text-yellow-400 bg-white" /> {rating}
                  </span>
                  <button class=' p-1  rounded-md bg-emerald-400 hover:bg-green-500' onClick={()=> { 
                    dispatch(addToCart({id,name,rating,desc,price,img,qnty:1})); 
                    toast.success('Successfully toasted!')
                  }
                  }>Add to Cart</button>
                </div>
                </div>
            
            
          </>
  )
}

export default FoodCard
