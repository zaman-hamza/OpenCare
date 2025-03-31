import React from 'react';

import Input from '../../../components/Elements/Input';
import Button from '../../../components/Elements/Button';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MAXLENGTH,
} from '../../../functions/Validators';

import { useForm } from '../../../components/Hooks/form-hook';

import './CreateThread.css';

const CreateThread = (props) => {
    const [formState, inputHandler] = useForm(
        {
            subject: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const threadSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend
    };

    return (
        <React.Fragment>
            <Input
                id="subject"
                element="input"
                type="text"
                label="Subject"
                validators={[
                    VALIDATOR_REQUIRE(),
                    VALIDATOR_MINLENGTH(5),
                    VALIDATOR_MAXLENGTH(25),
                ]}
                errorText="Please enter a valid subject! Make sure it is more than 5 characters and less than 25 characters."
                onInput={inputHandler}
            />
            <Input
                id="description"
                type="text"
                label="Description"
                rows={10}
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(20)]}
                errorText="Please enter a valid description with more than 20 characters!"
                onInput={inputHandler}
            />

            <Button
                type="submit"
                disabled={!formState.isValid}
                onClick={threadSubmitHandler}
            >
                Create
            </Button>
            <Button onClick={props.closeModal}>Close</Button>
        </React.Fragment>
    );
};

export default CreateThread;
