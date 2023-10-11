import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Edit.css';

const Edit = (props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <div className='edit-text'>
            {showEdit ?
                (<form className={`edit_form ${props.editClass || ""}`} onSubmit={(event) => {
                    event.preventDefault();
                    if (props.onSubmit) props.onSubmit(inputValue);
                    setShowEdit(false);
                }}>
                    <input type='text'
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={props.placeholder || "Enter Title"} />
                    <div className='edit-footer'>
                        <button type='submit'>{props.buttonText || "Add"}</button>
                        <AiOutlineClose onClick={() => setShowEdit(false)} />
                    </div>
                </form>) :
                <p className={`edit_display ${props.displayClass || ""}`} onClick={() => setShowEdit(true)}>{props.text || "Add Card"}</p>}
        </div>
    )
}

export default Edit