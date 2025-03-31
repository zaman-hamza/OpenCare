import React from 'react';

import user from '../../assets/icons/user.png'
import './User.css';

const User = (props) => {
    return (
        <div className={'user-container ' + props.className}>
            <img src={user} alt={props.id} />
            <p>{props.id}</p>
        </div>
    );
};

export default User;
