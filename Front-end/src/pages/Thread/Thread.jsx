import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import GetThreads from '../../functions/GetThreads';

import User from '../../components/Elements/User';
import Modal from '../../components/Elements/Modal';

import AddAnswer from './components/AddAnswer';
import AnswersList from './containers/AnswersList';

import airplane from '../../assets/icons/airplane.png';
import addIcon from '../../assets/icons/plus.png';
import './Thread.css';

const Thread = (props) => {
    const [showAnswerModal, setShowAnswerModal] = useState(false);

    const openAnswerModal = () => setShowAnswerModal(true);
    const closeAnswerModal = () => setShowAnswerModal(false);

    const threads = GetThreads();
    const { threadId } = useParams();

    let thread = null;
    for (let index = 0; index < threads.length; index++) {
        const element = threads[index];
        if (element.id === threadId) {
            thread = element;
        }
    }

    if (thread === null) {
        return (
            <div className="thread__not-found">
                <h1 className="center">404</h1>
                <h3 className="center">Not Found</h3>
                <hr />
                <h4 className="center">
                    What a weird thread that we searched up...
                </h4>
                <img
                    src={airplane}
                    alt="Airplane"
                    className="thread__not-found-img"
                />
            </div>
        );
    }

    return (
        <React.Fragment>
            <Modal
                show={showAnswerModal}
                onCancel={closeAnswerModal}
                header="Add Answer"
                contentClass="thread-container__modal-content"
                formClass="add-answer__form"
                footerClass="thread-container__modal-footer"
            >
                <AddAnswer closeModal={closeAnswerModal} />
            </Modal>
            <div>
                <div className="thread-container">
                    <h2 className="thread-container__subject">
                        {thread.subject}
                    </h2>
                    <h3 className="thread-container__description">
                        {thread.description}
                    </h3>
                    <User
                        id={thread.creator}
                        className="thread-container__creator"
                    />
                </div>
                <hr />
                <button
                    className="thread__add-answer-button"
                    onClick={openAnswerModal}
                >
                    <img src={addIcon} alt="Add" />
                    <p>Add Answer</p>
                </button>
                <AnswersList items={thread.answers} />
            </div>
        </React.Fragment>
    );
};

export default Thread;
