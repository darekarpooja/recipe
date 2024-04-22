





import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Project5 Recipe App/Home'
import About from './Project5 Recipe App/About'
import Search from './Project5 Recipe App/Search'
import Navbar from './Project5 Recipe App/Navbar'
import Header from './Project5 Recipe App/Header'
import AboutMeals from './Project5 Recipe App/AboutMeals'
import { useState } from 'react'
const App = () => {
   
const [search,setSearch]=useState('b')
  return (
    <div>
     
     <BrowserRouter>
         <Navbar setSearch={setSearch}/>
        
           <Routes>
                    <Route path='/' element={<Home search={search}/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/aboutmeals' element={<AboutMeals search={search}/>}/>
                    <Route path='/search' element={<Search/>}/>
           </Routes>
     </BrowserRouter>
        
    </div>
  )
}

export default App