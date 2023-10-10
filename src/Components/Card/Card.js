import React from 'react';
import './Card.css';
import { IoIosMore } from 'react-icons/io';

const Card = () => {
  return (
    <div className='cards'>
        <div className='card-top'>
            <div className='card-title'>
                <p className='title'>Title</p>
            </div>
                <IoIosMore/>
        </div>
        
    </div>
  )
}

export default Card