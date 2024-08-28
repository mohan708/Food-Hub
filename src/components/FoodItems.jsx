import React, { useState } from 'react'
import FoodData from '../data/FoodData'
import FoodCard from './FoodCard'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {

  const category = useSelector((state)=> state.category.category)
  const search = useSelector ((state)=> state.search.search)
  return (
 <>



    <div class=' flex gap-10 flex-wrap justify-center lg:justify-start mx-6 my-10'>
        {

          FoodData.filter((food)=>{

            if(category === 'All')
            {
              return food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }
            else{
              return(
                category === food.category && 
                food.name.toLowerCase().includes(search.toLowerCase())

              )
            }

          }).map((food)=>(
            <FoodCard key={food.id} 
                id={food.id} 
                price={food.price} 
                desc={food.desc} 
                name={food.name} 
                rating={food.rating} 
                img={food.img}
                qnty={food.qnty}
                />
          )

          )
            
            
            
            // FoodData.map((food)=>{


            //   if()

            //     return <FoodCard key={food.id} 
            //     id={food.id} 
            //     price={food.price} 
            //     desc={food.desc} 
            //     name={food.name} 
            //     rating={food.rating} 
            //     img={food.img}
            //     qnty={food.qnty}
            //     />
               
            // })
        }
    </div>
    </>
  )

}

export default FoodItems