import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div style={{
      marginBottom:"20px",
      padding:'30px',
      background:'#8000ff',
      color:'black',
      fontSize:'30px',
      fontWeight:'600',
      display:'flex',
      gap:'40px'

    }}
    >
      <div >
        <Link to="/" style={{color:"white"}}>Home</Link>
      </div>
      <div>
        <Link to="/about" style={{color:"white"}}>About</Link>
      </div>
      <div>
        <Link to="/products" style={{color:"white"}}>Products</Link>
      </div>
      <div>
        <Link to="/products/men" style={{color:"white"}}>Men</Link>
      </div>
      <div>
        <Link to="/products/women" style={{color:"white"}}>Women</Link>
      </div>
      <div>
        <Link to="/products/kids" style={{color:"white"}}>Kids</Link>
      </div>
      <div>
        <Link to="/products/homedecor" style={{color:"white"}}>Home Decor</Link>
      </div>
    </div>
  )
}

export default Navbar
