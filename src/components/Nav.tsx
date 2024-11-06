import React from 'react'
import {NavLink} from "react-router-dom";
import { useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";
const Nav = () => {

  const [navClass,setNavClass] = useState("right")
  
  function showNav(){
    if(window.innerWidth <= 1200){
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
            {/* page */}
          </span>

          <span className='mid'>
            <button className='menu' onClick={ showNav }><AiOutlineMenu /></button>
          </span>
            
          <span className={navClass}>
          {/* {({isActive}) => isActive ? "page active" : "page"} */}
              <NavLink className='page' to="/about" onClick={showNav}>My story</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Work projects</NavLink>
              {/* <NavLink className='page' to="/contact" onClick={showNav}>Contact</NavLink> */}
              <NavLink className='page' to="/mylens" onClick={showNav}>Through my lens and lines</NavLink>
              {/* <NavLink className='page' to="/lens&lines" onClick={showNav}>Through my lens and lines</NavLink> */}
              {/* <a className='page' href='https://www.instagram.com/nadar_divya/' target='_blank' rel="noopener noreferrer" onClick={showNav}>Instagram</a> */}
              <NavLink className='page' to="/" onClick={showNav}>Content with canva and photoshop</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Blog posts and articles</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Campaign proposal examples</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Cohesive branding example</NavLink>
              <NavLink className='page' to="/" onClick={showNav}>Influencer marleting strategy</NavLink>

              
          </span>
            
        </nav>
    </div>
  )
}

export default Nav
