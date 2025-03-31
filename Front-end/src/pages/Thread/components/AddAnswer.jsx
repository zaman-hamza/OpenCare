import React from 'react';

import Input from '../../../components/Elements/Input';
import Button from '../../../components/Elements/Button';

import { VALIDATOR_REQUIRE } from '../../../functions/Validators';

import { useForm } from '../../../components/Hooks/form-hook';

import './AddAnswer.css';

const AddAnswer = (props) => {
   const [formState, inputHandler] = useForm(
        {
            answer: {
                value: '',
                isValid: false,
            },
        },
        false
    );
    
    const answerSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend
    };

    return (
        <React.Fragment>
            <Input
                id="answer"
                type="text"
                label="Answer"
                rows={7}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid answer!"
                onInput={inputHandler}
            />

            <Button
                type="submit"
                disabled={!formState.isValid}
                onClick={answerSubmitHandler}
            >
                Add
            </Button>
            <Button onClick={props.closeModal}>Close</Button>
        </React.Fragment>
    );
};

export default AddAnswer;
