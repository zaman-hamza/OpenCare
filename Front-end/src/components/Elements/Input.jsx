import React, { useReducer, useEffect } from 'react';

import Button from './Button';

import { validate } from '../../functions/Validators';

import user from '../../assets/icons/user.png';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators),
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            };
        default:
            return state;
    }
};

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isTouched: false,
        isValid: false,
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            value: event.target.value,
            validators: props.validators,
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        });
    };

    const chooseFile = () => {};

    let element = null;
    if (props.element === 'input') {
        element = (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );
    } else {
        element = (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );
    }

    return (
        <div
            className={`form-control ${
                !inputState.isValid &&
                inputState.isTouched &&
                'form-control--invalid'
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && (
                <p className="form-control--invalid-errorText">
                    {props.errorText}
                </p>
            )}
        </div>
    );
};

export default Input;
