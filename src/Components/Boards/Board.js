import React from 'react';
import './Board.css';
import { IoIosMore } from 'react-icons/io';
import Card from '../Card/Card';
import Edit from '../Edit/Edit';

const Board = (props) => {

  return (
    <>
      <div className='b-title'>
        <div className='board-top'>
          <p className='board-top-title'>
            {props.boards?.title}
          </p>
          <div className='board-more'>
            <IoIosMore />
          </div>
        </div>
        <div className='board-cards'>
          {props.boards?.cards?.map((item) => (
            <Card key={item.id} 
                  cards={item}
                  handleDragEnd={props.handleDragEnd}
                  handleDragEnter={props.handleDragEnter}
                  boardID={props.boards?.id}
                  />
          ))}
          <Edit
            displayCLass="boards_card_add"
            text="Add Card"
            placeholder="Enter Card Title"
            onSubmit={(value) => props.addCard(value, props.boards?.id)} />
        </div>
      </div>
    </>
  )
}

export default Board