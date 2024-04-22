import { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom'

const About = () => {
    const location=useLocation()
    const specificFood = location.state.item
    console.log(specificFood);
   const navigate =useNavigate()

    const[meals, setMeals]=useState([])
    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificFood.strCategory}`)
      .then(res=>res.json())
      .then(d=>setMeals(d.meals))
    },[])
  return (
    <div >
     <center> <h1>About</h1>
      <img src={specificFood.strCategoryThumb}></img>
      <p>{specificFood.strCategory}</p>
      <p>{specificFood.strCategoryDescription}</p>
      <div className='Home'>
          <h1>Categories</h1>
         <section className='HomeSec'>
           {meals.map((item)=>{
            return(     
               <div key={item.idMeal}>
               <img onClick={()=>navigate('/aboutmeals',{state:{item}})} src={item.strMealThumb} height={'300px'} width={'250px'}></img>
                <p>{item.strMeal}</p>
                </div>
            )
           })}
         </section>
      </div></center>
    </div>
  )
}

export default About