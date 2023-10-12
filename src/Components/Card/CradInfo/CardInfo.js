import React from 'react';
import Modal from '../../Modal/Modal';
import './CardInfo.css';

const CardInfo = (props) => {
  return (
    <div>
        <Modal onClose={() => props.onClose()}>
            <h1>Hello I am Modal</h1>
        </Modal>
    </div>
  )
}

export default CardInfo