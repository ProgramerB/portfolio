import React from 'react';
import { ItemData } from '../ItemModel';
import './styles.css';
import {useNavigate} from "react-router-dom";

const Block = (item:ItemData) => {
  let navigate = useNavigate() 
  return (
    <div style={{
      backgroundImage: "url("+item.image+")",
    }} className='block' onClick={()=>{
        navigate("item/"+item.id);
    }}>
      <div className="headingBlock">
        {item.name} 
      </div>
        
    </div>
  )
}

export default Block
