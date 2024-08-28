import React from 'react'
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { removeFromCart,incrementqnty,decrementqnty} from '../redux/Slice/CartSlice';
import { useDispatch } from 'react-redux';


const ItemCard = ({id,name,price,img,qnty}) => {

  const dispatch = useDispatch();

 

  return (
    <>
    <div class='bg-white flex gap-3 shadow-md rounded-lg p-2 mb-3' >
          <MdDelete onClick = {()=> dispatch(removeFromCart({id,name,price,img,qnty}))} className='flex absolute right-7 bg-white text-gray-600 cursor-pointer'  />
        <img class='w-[50px] h-[50px]' src={img} alt="" />
        <div class='bg-white  leading-5'>
            <div class=' bg-white'>
            <h3 class='bg-white font-bold text-gray-800'>{name}</h3>           
            <div class='bg-white flex justify-between'>
             <span class='bg-white'>₹ {price}</span>
             <div class='bg-white flex justify-center items-center absolute right-7 gap-2'>
             <FiMinus onClick={qnty>0 ? ()=>dispatch(decrementqnty({id})) : dispatch(removeFromCart({id,name,price,img,qnty}))}  className='border-2 bg-white border-gray-600 text-gray-600 text-xl  hover:text-white hover:bg-green-400 hover:border-none rounded transition-all ease-linear cursor-pointer'/>
             <span className=' bg-white'>{qnty}</span>
             <FaPlus onClick={()=>  dispatch(incrementqnty({id})) }  className='border-2 bg-white border-gray-600 text-gray-600 text-xl hover:text-white hover:bg-green-400 hover:border-none rounded transition-all ease-linear cursor-pointer' />
             </div>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemCard