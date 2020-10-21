import React from 'react';
import AnswersBtn from "../answerBtn/AnswersBtn";

const Answers = props => {
    return (
        <div>
            {props.content.map((item, idx) =>
                <AnswersBtn
                    item={item}
                    key={idx}
                    onClick={props.onClick(idx)}
                />)}
        </div>
    );
};


export default Answers;