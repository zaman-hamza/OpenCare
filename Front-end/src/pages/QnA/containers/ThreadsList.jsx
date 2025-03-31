import React from 'react';

import ThreadItem from './ThreadItem';

import './ThreadsList.css';

const ThreadsList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="threads-list__not-found center">
                <h2>No threads found</h2>
                <h3>Maybe you should create a thread?</h3>
            </div>
        );
    }

    return (
        <ul className="threads-list">
            {props.items.map((thread) => (
                <ThreadItem
                    key={thread.id}
                    id={thread.id}
                    creatorId={thread.creator}
                    subject={thread.subject}
                    description={thread.description}
                    answers={thread.answers}
                />
            ))}
        </ul>
    );
};

export default ThreadsList;
