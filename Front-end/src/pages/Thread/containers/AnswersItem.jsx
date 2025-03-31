import React from 'react';

import User from '../../../components/Elements/User';

import upvote from '../../../assets/icons/upvote.png';
import downvote from '../../../assets/icons/downvote.png';
import './AnswersItem.css';

const AnswersItem = (props) => {
    function upvoteAnswer() {
        console.log('Upvoting');
    }

    function downvoteAnswer() {
        console.log('Downvoting');
    }

    return (
        <li className="answer-item">
            <User id={props.creatorId} />
            <h3 className="answer-item__answer">{props.answer}</h3>
            <div className="answer-item__votes">
                <button onClick={upvoteAnswer} className="upvote">
                    <img src={upvote} alt="upvote" />
                    <p>{props.upvotes}</p>
                </button>
                <button onClick={downvoteAnswer} className="downvote">
                    <img src={downvote} alt="downvote" />
                    <p>{props.downvotes}</p>
                </button>
            </div>
        </li>
    );
};

export default AnswersItem;
