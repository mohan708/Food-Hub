import React from 'react'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { Fa0, FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const [activCart,setActiveCart] = useState(false);

 


  const itemcart = useSelector((state) => state.cartAll.cart) 

  const totalQnty = itemcart.reduce((totalQty,item)=> totalQty+ item.qnty,0)
  const totalPrice = itemcart.reduce((total,item)=> total + item.price * item.qnty,0)

  const navigate =useNavigate()

  console.log(itemcart)
 
  return (
 <>
 <div className={`fixed right-0 w-full top-0 lg:w-[20vw] h-full  px-4  bg-white  ${activCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50 `}>

    <div class='flex justify-between bg-white items-center my-3'>
    <span class='font-bold text-xl bg-white text-gray-800'>My Order</span>
   < IoMdClose 
   onClick={()=>setActiveCart(!activCart)} 
   class='border-2 text-gray-600 text-xl rounded  border-gray-600 p-1 font-bold bg-white  hover:cursor-pointer hover:text-red-400 hover:border-red-400' />
   </div>
{
itemcart.length > 0 ? (
  itemcart.map((food)=>{
    return <ItemCard 
    id={food.id}
    name={food.name}
    price={food.price}
    rating= {food.rating}
    qnty = {food.qnty}
    img= {food.img}
      
    />
  })
)
: (
  <h2 className='bg-white text-xl font-bold text-gray-700 mt-4 flex justify-center items-center'>Your cart is Empty</h2>
)
}

<div class='absolute bottom-0 bg-white '>
    <p class='bg-white font-bold text-gray-800'>Items : <span class='bg-white text-green-600'> {totalQnty } </span></p>
    <p class='bg-white font-bold text-gray-800'>Total Amount: ₹ <span class='text-green-500 bg-white' >{totalPrice}</span></p>
    <hr class='my-3 w-[90vw] lg:w-[18vw]'  />
    <button onClick={()=> navigate('/sucess')} class='  border-2 rounded-lg bg-green-500 text-white px-3 py-2 w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
</div>


  

 </div>
 <FaShoppingCart onClick={()=>setActiveCart(!activCart)} className={`fixed bottom-10  right-4 bg-white text-5xl p-3  shadow-md rounded-full cursor-pointer ${totalQnty > 0 && "animate-bounce delay-500 transition-all"}  `}  />
 </>
  )
}

export default Cart