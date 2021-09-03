import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';
import useLogin from '../../../hooks/useLogin';

const Login = () => {
    const [error, setError] = useState("");
    const [send] = useLogin();
    const login = () => {
        send(formValues, setError);
    }
    const { formValues, handleChange, handleSubmit } = useForm(login);

    return (
        <form onSubmit={handleSubmit} >
            <h1>{error}</h1>
            <div class="mb-3">
                <label for="usernameInput" class="form-label">Email address</label>
                <input type="username" name="username" value={formValues.username} onChange={handleChange} class="form-control" id="usernameInput" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" value={formValues.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}

export default Login;
