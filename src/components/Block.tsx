import React, { useEffect, useState } from 'react';
import { ItemData } from '../ItemModel';
import './styles.css';
import {useLocation, useNavigate} from "react-router-dom";

const Block = (item:ItemData) => {
  let navigate = useNavigate()
  let loc = useLocation()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoading(false);
    };
    img.src = item.image;
  }, [item.image]);

  return (
    <div
      style={{
        backgroundImage: loading ? "none" : `url(${item.image})`,
      }}
      className='block'
      onClick={() => {
        if (loc.pathname === "/") {
          navigate("item/" + item.id);
        } else {
          navigate(loc.pathname + "/" + item.id);
        }
      }}
    >
      <div>
        { loading && (<div className='spinner'></div>)}
      </div>
      <div className="headingBlock">
        {item.name}
      </div>
    </div>
  )
}


export default Block
