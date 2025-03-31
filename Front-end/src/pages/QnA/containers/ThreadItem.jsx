import React from 'react';

import Button from '../../../components/Elements/Button';

import './ThreadItem.css';

const ThreadItem = (props) => {
    function truncate(str, length) {
        if (str.length > length) {
            return str.slice(0, length) + '...';
        } else return str;
    }

    let answerSuffix = ' Answers';
    if (props.answers.length === 1) {
        answerSuffix = ' Answer';
    }

    return (
        <li className="thread-item">
            <h2 className="thread-item__subject">
                {truncate(props.subject, 50)}
            </h2>
            <h3 className="thread-item__description">
                {truncate(props.description, 100)}
            </h3>
            <h3 className="thread-item__data">
                {props.creatorId + ' | ' + props.answers.length + answerSuffix}
            </h3>
            <Button
                to={`/threads/${props.id}`}
                className="thread-item__view-button"
            >
                Answer Thread
            </Button>
        </li>
    );
};

export default ThreadItem;
