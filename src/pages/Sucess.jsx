import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Sucess = () => {
  const [loader ,setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  },[])

  return (
    <>
<div className='flex flex-col justify-center items-center h-screen '>
    {
      loader ?   <PropagateLoader color='#36d7b7'/> :  
   
      <div className=' '>
      <h1 className='font-bold text-3xl mb-4 text-center'>Order Sucessful!</h1>
      <p>Your order has been sucessfully placed.....</p>
      </div>

    }

</div>

    </>
  )
}

export default Sucess