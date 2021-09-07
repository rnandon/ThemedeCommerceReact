import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import useForm from '../../../hooks/useForm';
import useLogin from '../../../hooks/useLogin';
import useRegister from '../../../hooks/useRegister';

const Register = () => {
    const history = useHistory();
    const [error, setError] = useState("");
    const { register, userInfo } = useRegister();
    const send = useLogin();
    const sendRegistration = () => {
        console.log(formValues);
        register(formValues);
        history.push("/");
    }
    const { formValues, handleChange, handleSubmit } = useForm(sendRegistration);

    useEffect(() => {
        if (userInfo.userName) {
            const loginInfo = {
                username: userInfo.userName,
                password: formValues.password
            };
            send(loginInfo, setError);
        }    
    }, [userInfo])

    return (
        <form onSubmit={handleSubmit} >
            <h1>{error}</h1>
            <div class="mb-3">
                <label for="firstnameInput" class="form-label">First Name</label>
                <input type="text" name="firstname" value={formValues.firstname} onChange={handleChange} class="form-control" id="firstnameInput" />
            </div>
            <div class="mb-3">
                <label for="lastnameInput" class="form-label">Last Name</label>
                <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} class="form-control" id="lastnameInput" />
            </div>
            <div class="mb-3">
                <label for="usernameInput" class="form-label">Username</label>
                <input type="text" name="username" value={formValues.username} onChange={handleChange} class="form-control" id="usernameInput" />
            </div>
            <div class="mb-3">
                <label for="passwordInput" class="form-label">Password</label>
                <input type="password" name="password" value={formValues.password} onChange={handleChange} class="form-control" id="passwordInput" />
            </div>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Email address</label>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} class="form-control" id="emailInput" />
            </div>
            <div class="mb-3">
                <label for="phoneInput" class="form-label">Phone</label>
                <input type="phone" name="phonenumber" value={formValues.phonenumber} onChange={handleChange} class="form-control" id="phoneInput" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Register;
