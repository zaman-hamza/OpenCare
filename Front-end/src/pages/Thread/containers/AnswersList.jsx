import React from 'react';

import AnswersItem from './AnswersItem';

import './AnswersList.css';

const AnswersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="answers-list__not-found center">
                <h2>No answers found</h2>
                <h3>Will you be the first answer?</h3>
            </div>
        );
    }

    return (
        <ul className="answers-list">
            {props.items.map((answer) => (
                <AnswersItem
                    key={answer.id}
                    id={answer.id}
                    creatorId={answer.creator}
                    answer={answer.answer}
                    upvotes={answer.upvotes}
                    downvotes={answer.downvotes}
                />
            ))}
        </ul>
    );
};

export default AnswersList;
