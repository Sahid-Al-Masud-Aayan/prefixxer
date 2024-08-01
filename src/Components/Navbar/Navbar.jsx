import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <nav className='main'>
    <div className="logo">
        <Link to='/'><p>Prefixxer</p></Link>
    </div>
    <div className="for_text">
         <ul className='nav_text'>
        
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/about us'>About us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        
    </ul>
    </div>
   
   </nav>
    </>
  )
}

export default Navbar
