import { useState,useEffect } from "react";
import ReactPlayer from 'react-player'
import { useLocation ,useNavigate} from "react-router-dom";

const AboutMeals = (search) => {
    const location=useLocation()
    const specificMeals=location.state.item
    console.log(specificMeals);
const navigate=useNavigate()
 
const[data2, setData2]=useState([])

useEffect(()=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
  .then(res=>res.json())
  .then(d=>setData2(d.meals))
},[data2])

  return (
    <div className="AboutMeals">
    <aside className="AsideAbout" style={{display:'flex',alignItems:'center',justifyContent:"space-around", flexWrap:'wrap'}}>
    <img style={{borderRadius:'10%',margin:'auto'}} height={'300px'} width={'300px'} src={specificMeals.strMealThumb}></img>
    <p style={{textAlign:'justify', width:'800px', color:'gray', fontWeight:300}}>
    <span style={{color:'red', fontWeight:900}}>Name</span>:{specificMeals.strMeal}
    <br></br>
    <span><span style={{color:'red', fontWeight:900}}>Category</span>:{specificMeals.strCategory}</span>
    <br></br>
    <span><span style={{color:'red', fontWeight:900}}>Area</span>:{specificMeals.strArea}</span>
    <br></br>
    <span>{specificMeals.strInstructions}</span>
    </p>
    </aside>
    <ReactPlayer url={specificMeals.strYoutube} width={'100%'} controls />
    <h1>Meals</h1>
   <section className='HomeSec'>
  {data2.map((item)=>{
   return(
        
       <div className="Homediv" key={item.idMeal}>
       <img src={item.strMealThumb} height={'300px'} width={'250px'} onClick={()=>navigate('/aboutmeals',{state:{item}})}></img>
       <p>{item.strMeal}</p>
       </div>
   )
  })}
</section>

    </div>
  )
}

export default AboutMeals
