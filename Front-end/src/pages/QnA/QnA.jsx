import React, { useState, useContext } from 'react';

import GetThreads from '../../functions/GetThreads';

import Modal from '../../components/Elements/Modal';

import ThreadsList from './containers/ThreadsList';
import CreateThread from './components/CreateThread';

import { AuthContext } from '../../components/context/auth-context';

import addIcon from '../../assets/icons/plus.png';
import './QnA.css';

const QnA = () => {
    const auth = useContext(AuthContext);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const openCreateModal = () => setShowCreateModal(true);
    const closeCreateModal = () => setShowCreateModal(false);

    const threads = GetThreads();
    return (
        <React.Fragment>
            <Modal
                show={showCreateModal}
                onCancel={closeCreateModal}
                header="Create Thread"
                contentClass="thread-container__modal-content"
                formClass="create-thread__form"
                footerClass="thread-container__modal-footer"
            >
                <CreateThread closeModal={closeCreateModal} />
            </Modal>
            <div>
                <h1 className="qna__title">Threads</h1>
                {auth.isLoggedIn && (
                    <button
                        className="qna__create-thread-button"
                        onClick={openCreateModal}
                    >
                        <img src={addIcon} alt="Add" />
                        <p>Create Thread</p>
                    </button>
                )}

                <hr />
                <ThreadsList items={threads} />
            </div>
        </React.Fragment>
    );
};

export default QnA;
