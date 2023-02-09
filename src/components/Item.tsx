import React from 'react'
import {useParams} from "react-router-dom";
import {items } from '../ItemModel';
const Item = () => {
    const {id} = useParams();
    return (
        <div className='main'>
            <div className='col left-col'>
                <div className='main-title'>{items[Number(id)-1].name}</div>
                <div className='main-text'>something</div>
            </div>
            <div className='col right-col'>
                <img className='main-image' src={items[Number(id)-1].image} alt="custom" />
            </div>

            <div className='image-row'>
                <img className='side-image' src={items[Number(id)-1].image} alt="custom" />
                <img className='side-image' src={items[Number(id)-1].image} alt="custom" />
                <img className='side-image' src={items[Number(id)-1].image} alt="custom" />
            </div>
        </div>
    )
}

export default Item
