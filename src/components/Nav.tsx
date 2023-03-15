import React from 'react'
import {NavLink} from "react-router-dom";
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
          {/* {({isActive}) => isActive ? "page active" : "page"} */}
              <NavLink className='page' to="/about" onClick={showNav}>About</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Work</NavLink>
              <NavLink className='page' to="/contact" onClick={showNav}>Contact</NavLink>
              <NavLink className='page' to="/hobby" onClick={showNav}>Hobby</NavLink>
              {/* <a className='page' href='https://www.instagram.com/nadar_divya/' target='_blank' rel="noopener noreferrer" onClick={showNav}>Instagram</a> */}
          </span>
            
        </nav>
    </div>
  )
}

export default Nav
