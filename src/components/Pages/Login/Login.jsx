import React from 'react';
import useForm from '../../../hooks/useForm';

const Login = () => {
    const sendLogin = () => {
        return "1";
    }

    const { formValues, handleChange, handleSubmit } = useForm(sendLogin);

    return (
        <h1>Under construction</h1>
    )
}

export default Login;