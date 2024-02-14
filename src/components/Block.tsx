import React, { useState } from 'react';
import { ItemData } from '../ItemModel';
import './styles.css';
import {useLocation, useNavigate} from "react-router-dom";

const Block = (item:ItemData) => {
  let navigate = useNavigate() 
  let loc = useLocation()

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{
      backgroundImage: "url("+item.image+")",
    }} className={loading?'block':'none'} onClick={()=>{
        if(loc.pathname === "/")
        {
          navigate("item/"+item.id);
        }
        else
        {
          navigate(loc.pathname+"/"+item.id);
        }
    }} onLoad={handleImageLoad}>
      <div className="headingBlock">
        {item.name}
      </div>
    </div>
  )
}

export default Block
