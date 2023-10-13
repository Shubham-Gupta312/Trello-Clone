import React from 'react';
import Modal from '../../Modal/Modal';
import { MdOutlineDescription } from 'react-icons/md';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import './CardInfo.css';

const CardInfo = (props) => {
  return (
    <div>
      <Modal onClose={() => props.onClose()}>
        <div className='card-info'>
          <div className='info-box'>
            <div className='info-box-title'>
              <MdOutlineDescription />
              Setup Redux Toolkit 
            </div>
            <div className='info-box-desc'>
              <AiOutlineMenuUnfold/>
              Description
            </div>
            <div className='info-box-activity'>
              <AiOutlineMenuUnfold/>
              Activity
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CardInfo