import React from 'react';

const AnswersBtn = (props) => {
    return (
        <button className='btn btn-lg btn-secondary' onClick={props.onClick}>
            {props.item}
        </button>
    );
};

export default AnswersBtn;