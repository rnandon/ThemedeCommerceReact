import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import useLogin from '../../../hooks/useLogin';

const Login = () => {
    const history = useHistory();
    const send = useLogin();
    
    const { formValues, handleChange, handleSubmit } = useForm(() => login(formValues, send, history));

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div class="mb-3">
                    <label for="usernameInput" class="form-label">Username</label>
                    <input type="username" name="username" value={formValues.username} onChange={handleChange} class="form-control" id="usernameInput" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" value={formValues.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <p>Not registered? Register <Link to="/register">here.</Link></p>
        </div>
        )
}

export default Login;

function login(values, send, history) {
        send(values);
        history.push("/");
}