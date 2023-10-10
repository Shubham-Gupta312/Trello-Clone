import React, { useState } from 'react';
import './Board.css';
import { IoIosMore } from 'react-icons/io';
import Card from '../Card/Card';
import Edit from '../Edit/Edit';

const Board = () => {

  return (
    <>
      <div className='b-title'>
        <div className='board-top'>
          <p className='board-top-title'>
            To-Do <span>3</span>
          </p>
          <div className='board-more'>
            <IoIosMore />
          </div>
        </div>
        <div className='board-cards'>
          <Card />
          <Edit
            displayCLass="boards_card_add"
            text="Add Card"
            placeholder="Enter Card Title" />
        </div>
      </div>
    </>
  )
}

export default Board