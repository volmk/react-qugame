import React from 'react';

const Info = (props) => {
    const totalPrize = props.totalPrize
    const currPrize = props.currPrize
    const correctAnswer = props.correctAnswer
    return (
        <div>
            <p>Total prize: {totalPrize}</p>
            <p>Prize on current round: {currPrize}</p>
            {correctAnswer && <p>Correct: {correctAnswer}</p>}
        </div>
    );
};

export default Info;