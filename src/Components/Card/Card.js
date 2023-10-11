import React from 'react';
import './Card.css';
import { IoIosMore } from 'react-icons/io';

const Card = (props) => {
  return (
    <div className='cards'
      draggable
      onDragEnd={() => props.handleDragEnd(props.cards?.id, props.boards?.id)}
      onDragEnter={() => props.handleDragEnter(props.cards?.id, props.boards?.id)}
    >

      <div className='card-top'>
        <div className='card-title'>
          <p className='title'>{props.cards?.title}</p>
        </div>
        <IoIosMore />
      </div>

    </div>
  )
}

export default Card