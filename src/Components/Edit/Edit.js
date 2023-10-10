import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Edit.css';

const Edit = (props) => {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className='edit-text'>
            {showEdit ?
                (<form className={`edit_form ${props.editClass || ""}`} onSubmit={(event) => {
                    event.preventDefault();
                    if (props.onSubmit) props.onSubmit();
                }}>
                    <input type='text'
                        autoFocus
                        defaultValue={props.text}
                        placeholder={props.placeholder || "Enter Title"} />
                    <div className='edit-footer'>
                        <button type='submit'>{props.buttonText || "Add"}</button>
                        <AiOutlineClose  onClick={()=>setShowEdit(false)}/>
                    </div>
                </form>) :
                <p className={`edit_display ${props.displayClass || ""}`} onClick={()=>setShowEdit(true)}>{props.text || "Add Card"}</p>}
        </div>
    )
}

export default Edit