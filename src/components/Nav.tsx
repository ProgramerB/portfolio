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
            <div className='name'>Divya Nadar</div>
            {/* page */}
          </span>

          <span className='mid'>
            <button className='menu' onClick={ showNav }><AiOutlineMenu /></button>
          </span>
            
          <span className={navClass}>
          {/* {({isActive}) => isActive ? "page active" : "page"} */}
              <NavLink className='page' to="/about" onClick={showNav}>My story</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Work Projects</NavLink>
              {/* <NavLink className='page' to="/contact" onClick={showNav}>Contact</NavLink> */}
              <NavLink className='page' to="/hobby" onClick={showNav}>My Creations</NavLink>
              <NavLink className='page' to="/lens&lines" onClick={showNav}>Through my lens and lines</NavLink>
              {/* <a className='page' href='https://www.instagram.com/nadar_divya/' target='_blank' rel="noopener noreferrer" onClick={showNav}>Instagram</a> */}
          </span>
            
        </nav>
    </div>
  )
}

export default Nav
