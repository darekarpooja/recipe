
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setSearch}) => {
  return (
    <div className='Navbar'>
          <nav className='nav'>
               <article className='navart'>
                <img src='https://www.themealdb.com/images/logo-small.png'></img>
                <Link style={{textDecoration:'none', padding:'10px'}} to={'/'}>Home</Link>
                {/* <Link style={{textDecoration:'none', padding:'10px,'}}  to={'/about'}>About</Link>
                <Link to={'/search'}>Search</Link> */}
                <input type=' search' placeholder=' enter your Food ' onChange={(e)=>setSearch(e.target.value) }/>
               </article>
          </nav>
   
    </div>
  )
}

export default Navbar