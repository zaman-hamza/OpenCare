import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
    if (props.href) {
        return (
            <a
                className={`${props.className} ${
                    props['data-aos']
                } button button--${props.size || 'default'} ${
                    props.inverse && 'button--inverse'
                } ${props.danger && 'button--danger'} ${
                    props.white && 'button--white'
                }`}
                href={props.href}
            >
                {props.children}
            </a>
        );
    }

    if (props.to) {
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={`${props.className} ${
                    props['data-aos']
                } button button--${props.size || 'default'} ${
                    props.inverse && 'button--inverse'
                } ${props.danger && 'button--danger'} ${
                    props.white && 'button--white'
                }`}
            >
                {props.children}
            </Link>
        );
    }

    return (
        <button
            className={`${props.className} ${
                props['data-aos']
            } button button--${props.size || 'default'} ${
                props.inverse && 'button--inverse'
            } ${props.danger && 'button--danger'} ${
                props.white && 'button--white'
            }`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
