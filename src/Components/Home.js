import React, { useState } from 'react';
import './Home.css'
import Board from './Boards/Board';
import Edit from './Edit/Edit';

const Home = () => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: "To-Do",
            cards: [
                {
                    id: 1001,
                    title: "Setup Redux Toolkit",
                },
                {
                    id: 1002,
                    title: "Implement Landing Page",
                },
            ]
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 1010,
                    title: "Setup Material UI",
                },
            ]
        },
        {
            id: 3,
            title: "Done",
            cards: [
                {
                    id: 10001,
                    title: "Initalise React Project",
                },
                {
                    id: 10002,
                    title: "Setup Eslint Prettier",
                },
                {
                    id: 10003,
                    title: "New Task Updated",
                },
            ]
        },
    ]);

    const [target, setTarget] = useState({ cid, bid })

    const addCard = (title, bid) => {
        const card = {
            id: 2001,
            title
        };

        const index = boards.findIndex(item => item.id === bid);
        if (index < 0) return;

        // const cardIndex = boards?.cards.findIndex((item) => item.id === cid);
        // if (cardIndex < 0) return;


        const tempBoards = [...boards]
        tempBoards[index].cards.push(card);
        setBoards(tempBoards);
    }

    const addBoard = (title) => {
        setBoards([...boards,
        {
            id: 1 + Math.random(2),
            title,
            cards: []
        }])
    }

    const handleDragEnd = (cid, bid) => {
        let src_Board_Index, src_Card_Index, trgt_Board_Index, trgt_Card_Index;

        src_Board_Index = boards.findIndex(item => item.id === bid);
        if (src_Board_Index < 0) return;

        src_Card_Index = boards[src_Board_Index].cards?.findIndex(item => item.id === cid);
        if (src_Card_Index < 0) return;

        trgt_Board_Index = boards.findIndex(item => item.id === target.bid);
        if (trgt_Board_Index < 0) return;

        trgt_Card_Index = boards[src_Board_Index].cards?.findIndex(item => item.id === target.cid);
        if (trgt_Card_Index < 0) return;

        const tempBoard = [...boards]
        const tempCard = tempBoard[src_Board_Index].cards[src_Card_Index];

        tempBoard[src_Board_Index].cards.splice(src_Card_Index, 1);
        tempBoard[trgt_Board_Index].cards[trgt_Card_Index].splice(trgt_Card_Index, 0, tempCard);

        setBoards(tempBoard);
    };
    const handleDragEnter = (cid, bid) => {
        setTarget({
            cid,
            bid
        });
    };
    
    return (
        <>
            <div className='navbar'>
                <h1>Trello-Clone Assignment</h1>
            </div>
            <div className='board-title'>
                <div className='board'>
                    {boards.map((item) => (
                        <Board key={item.id}
                            boards={item}
                            addCard={addCard}
                            handleDragEnd={handleDragEnd}
                            handleDragEnter={handleDragEnter}
                        />))}
                    <div className='app_add_board'>
                        <Edit text="Add Another List" placeholder="Enter Board Title"
                            onSubmit={value => addBoard(value)} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home