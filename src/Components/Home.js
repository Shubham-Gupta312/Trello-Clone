import React, { useState } from 'react';
import './Home.css'
import Board from './Boards/Board';
import Edit from './Edit/Edit';

const Home = ()  => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: "To-Do",
            cards:[
                {
                    id: 1001,
                    title: "Setup Redux Toolkit",
                }
            ]   
        },
        {
            id: 2,
            title: "To-Do",
            cards:[
                {
                    id: 1002,
                    title: "Implement Landing Page",
                }
            ]   
        },
    ]);
    return (
        <>
            <div className='navbar'>
                <h1>Trello-Clone Assignment</h1>
            </div>
            <div className='board-title'>
                <div className='board'>
                    {boards.map((item)=><Board key={item.id}/>)}
                    <div className='app_add_board'>
                        <Edit text="Add Another List" placeholder="Enter Board Title" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home