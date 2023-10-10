import React from 'react';
import './Card.css';
import { IoIosMore } from 'react-icons/io';
import {MdUpdate} from 'react-icons/md';

const Card = () => {
  return (
    <div className='cards'>
        <div className='card-top'>
            <div className='card-title'>
                <p className='title'>Title</p>
            </div>
                <IoIosMore/>
        </div>
        <div className='card-footer'>
            <p><MdUpdate/> 10 Oct</p>
        </div>
    </div>
  )
}

export default Card