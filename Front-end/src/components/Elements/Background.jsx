import React from 'react';
import ReactDOM from 'react-dom';

import './Background.css';

const Background = () => {
    const content = <div className="bg" />;
    return ReactDOM.createPortal(
        content,
        document.getElementById('background-hook')
    );
};

export default Background;
