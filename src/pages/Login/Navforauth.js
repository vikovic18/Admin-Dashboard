import React from 'react'
import { Link } from 'react-router-dom'
import './Navforauth.css'

const Navbar = () => {
  return (
    <div className='navbar'>
<div className='navbar-header'>
            <h1> Admin DashBoard</h1>
    </div>

    <div className='navbar-signins'>
        <Link to='/login' > <button> Login </button> </Link>  
        <Link to='/signup' > <button> Sign Up </button> </Link>  
    </div>
    </div>
  )
}

export default Navbar;