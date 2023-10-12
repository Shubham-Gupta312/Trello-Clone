import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className='modal' onClick={() => props.onClose ? props.onClose() : ""}>
            <div className='modal-text'
                onClick={(event) => event.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Modal