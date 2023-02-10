import React from 'react'
import {Link} from "react-router-dom";
import { useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";
const Nav = () => {

  const [navClass,setNavClass] = useState("right")
  
  function showNav(){
    if(window.innerWidth <= 800){
      if(navClass === "right")
        setNavClass("right-hidden");
      else
        setNavClass("right");
    }
  }

  return (
    <div>
      
        <nav className="nav">
          <span className='left'>
            <div className='page name'>Divya Nadar</div>
          </span>

          <span className='mid'>
            <button className='menu' onClick={ showNav }><AiOutlineMenu /></button>
          </span>
            
          <span className={navClass}>
              
              <Link className='page' to="/about" onClick={showNav}>About</Link>
              <Link className='page' to="/" onClick={showNav}>Gallery</Link>
              <Link className='page' to="/contact" onClick={showNav}>Contact</Link>
              <a className='page' href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer" onClick={showNav}>Instagram</a>
          </span>
            
        </nav>
    </div>
  )
}

export default Nav
