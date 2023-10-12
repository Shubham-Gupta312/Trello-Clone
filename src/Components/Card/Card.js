import React, { useState } from 'react';
import './Card.css';
import CardInfo from './CradInfo/CardInfo';

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {
        showModal && <CardInfo onClose={() => {
          // console.log("call")
          setShowModal(false)}} />
      }
      <div className='cards'
        draggable
        onDragEnter={() => props.handleDragEnter(props.cards?.id, props.boardID)}
        onDragEnd={() => props.handleDragEnd(props.cards?.id, props.boardID)}
        onClick={() => setShowModal(true)}
      >
        <div className='card-top'>
          <div className='card-title'>
            <p className='title'>{props.cards?.title}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card