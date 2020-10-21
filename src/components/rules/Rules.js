import React from 'react';
import './Rules.css'
const Rules = (props) => {
    return (
        <ol className='rules'>
            <li>You need to choose one correct answer</li>
            <li>You need get {props.toWin} points to win</li>
            <li>You can skip question one time per game</li>
            <li>Game is over if you choose wrong answer</li>
        </ol>
    );
};

export default Rules;