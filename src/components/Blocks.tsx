import React from 'react'
import { useLocation } from 'react-router-dom';
import { ItemData } from '../ItemModel';
import Block from './Block';
import './styles.css';
type ItemsProp = {
    items:ItemData[];
}
const Blocks = (list:ItemsProp) => {  
    let loc = useLocation()
    if(loc.pathname === '/mylens'){
        document.documentElement.style.setProperty('--bodyColor',"#000000")
        document.documentElement.style.setProperty('--textColor',"#ffffff")
        document.documentElement.style.setProperty('--footBodyColor',"#0c0d0d")
        document.documentElement.style.setProperty('--footTextColor',"#dfddd9")


    }
    else{
        document.documentElement.style.setProperty('--bodyColor',"#ffffff")
        document.documentElement.style.setProperty('--textColor',"#000000")
        document.documentElement.style.setProperty('--footBodyColor',"#eeeff0")
        document.documentElement.style.setProperty('--footTextColor',"#5c5c5c")
    }
    return (
        <div className='blocks'>
            {list.items?.map((item)=>{
                return(
                    <Block id={item.id} name ={item.name} image={item.image} description={item.description} />
                )
            })}
        </div>
  )
}

export default Blocks
