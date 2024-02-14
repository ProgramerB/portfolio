import React from 'react'
import {useParams} from "react-router-dom";
import { hobbyItems } from '../ItemModel';

const ItemHobby = () => {
    const {id} = useParams();
    return (
        <div className='main'>
            <div className='col left-col'>
                <div className='main-title'>{hobbyItems[Number(id)-1].name}</div>
                <div className='main-text'>{hobbyItems[Number(id)-1].description}</div>
            </div>
            <div className='col right-col'>
                <img className='main-image' src={hobbyItems[Number(id)-1].image} alt="custom" />
            </div>

                {/* <div className='image-row'>
                    <img className='side-image' src={hobbyItems[Number(id)-1].image} alt="custom" />
                    <img className='side-image' src={hobbyItems[Number(id)-1].image} alt="custom" />
                    <img className='side-image' src={hobbyItems[Number(id)-1].image} alt="custom" />
                </div> */}
        </div>
    )
}

export default ItemHobby
