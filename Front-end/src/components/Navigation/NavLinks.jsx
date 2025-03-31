import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';

import Button from '../Elements/Button';

import user from '../../assets/icons/user.png';
import './NavLinks.css';

const NavLinks = (props) => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" exact>
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/threads" exact>
                    Threads
                </NavLink>
            </li>
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth" exact>
                        Authenticate
                    </NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li className='navlink__user-container'>
                    <img src={user} alt="pfp" />
                    <p>{auth.user.name}</p>
                    <Button inverse className='navlink__user-container__logout' onClick={auth.logout}>
                        Logout
                    </Button>
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
