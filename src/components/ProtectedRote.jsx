import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRote = ({element}) => {
    const cartItem = useSelector((state)=>state.cartAll.cart)
  return  cartItem.length > 0  ? element : <Navigate to='/' />
   
  
}
