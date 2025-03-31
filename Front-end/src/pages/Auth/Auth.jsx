import React, { useState, useContext } from 'react';

import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/Input';
import Card from '../../components/Elements/Card';

import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from '../../functions/Validators';

import { useForm } from '../../components/Hooks/form-hook';
import { AuthContext } from '../../components/context/auth-context';

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);

        auth.login(
            formState.inputs.name.value,
            formState.inputs.password.value
        );
    };

    return (
        <div className="center auth-container">
            <Card className="auth-container__card">
                <h2>Register</h2>
                <hr />

                <form>
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid name"
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid password that is more than 5 characters."
                        onInput={inputHandler}
                    />
                    <Button
                        className="auth-container__login-button"
                        onClick={authSubmitHandler}
                        disabled={!formState.isValid}
                    >
                        Register
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Auth;
