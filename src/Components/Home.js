import React from 'react';
import './Home.css'
import Board from './Boards/Board';

const Home = () => {
    return (
        <>
            <div className='navbar'>
                <h1>Trello-Clone Assignment</h1>
            </div>
            <div className='board-title'>
                <div className='board'>
                    <Board/>
                    <Board/>
                    <Board/>
                </div>

            </div>
        </>
    )
}

export default Home