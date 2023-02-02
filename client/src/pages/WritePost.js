import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import Auth from '../utils/auth';

const WritePost = () => {
    const [formState, setFormState] = useState({
        location: '',
        position: '',
        subject: '',
        prompt: '',
        response: '',

    });
    const [addPost, { error, data }] = useMutation(ADD_POST);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addPost({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container justify-content-center mt-5">
            <div className="container col-8 flex-column m-5">

                <div className="row card container flex-column mt-3 p-3">
                    <div className="row flex-row justify-content-space-between">
                        <h3 className="column">share your interview experience</h3>
                        <div className="column"><Link to='/blog'>return to post feed</Link></div></div>
                    <form className="container flex-column" onSubmit={handleFormSubmit}>
                        <div><input
                            className="form-input"
                            placeholder="interview location"
                            name="location"
                            type="text"
                            value={formState.location}
                            onChange={handleChange}
                        /></div>
                        <div className="mt-1"><input
                            className="form-input"
                            placeholder="position interviewed for"
                            name="position"
                            type="text"
                            value={formState.position}
                            onChange={handleChange}
                        /></div>
                        <div className="mt-1"><input
                            className="form-input"
                            placeholder="question subject area"
                            name="subject"
                            type="text"
                            value={formState.subject}
                            onChange={handleChange}
                        /></div>
                        <textarea
                            className="form-input mt-2"
                            placeholder="what was the interview prompt?"
                            name="prompt"
                            cols="60"
                            rows="5"
                            value={formState.prompt}
                            onChange={handleChange}>
                        </textarea>
                        <textarea
                            className="form-input mt-2"
                            placeholder="how did you handle it?"
                            name="response"
                            cols="60"
                            rows="10"
                            value={formState.response}
                            onChange={handleChange}>
                        </textarea>
                        <div className="row justify-content-end"><button
                            className="btn btn-primary mt-2"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default WritePost;
