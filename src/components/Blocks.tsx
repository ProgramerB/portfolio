import React from 'react'
import { items } from '../ItemModel';
import Block from './Block';
import './styles.css';

const Blocks = () => {    
    return (
        <div className='blocks'>
            {items?.map((item)=>{
                return(
                    <Block id={item.id} name ={item.name} image={item.image} description={item.description} />
                )
            })}
        </div>
  )
}

export default Blocks
