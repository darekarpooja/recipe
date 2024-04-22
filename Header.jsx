import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
     const[randomFood,setRandomFood]=useState([])
     useEffect(()=>{
          fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
          .then(res=>res.json())
          .then(d=>setRandomFood(d.meals))
          
     },[])
  
  return(
     <div className='Header'>
          {
               randomFood.map((item)=>{
                    return(
                         <section className='Headersec' key={item.idMeal}>
                              <div className='rights'>
                                   <h1 className='h11'>Todays Special</h1>
                                   <h1 className='h11' style={{color:'orangered'}}>{item.strMeal}</h1>
                                   <h1 className='h11'>{item.strCategory}</h1>
                              </div>
                              <div className='lefts' >
                                   <img src={item.strMealThumb} height={'400px'} width={'400px'} ></img>
                              </div>
                         </section>
                    )
               })
          }
     </div>
  )
} 

export default Header
