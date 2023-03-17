import React from 'react';
import { ItemData } from '../ItemModel';
import './styles.css';
import {useLocation, useNavigate} from "react-router-dom";

const Block = (item:ItemData) => {
  let navigate = useNavigate() 
  let loc = useLocation()

  return (
    <div style={{
      backgroundImage: "url("+item.image+")",
    }} className='block' onClick={()=>{
        if(loc.pathname === "/")
        {
          navigate("item/"+item.id);
        }
        else
        {
          navigate(loc.pathname+"/"+item.id);
        }
    }}>
      <div className="headingBlock">
        {item.name}
      </div>
    </div>
  )
}

export default Block
