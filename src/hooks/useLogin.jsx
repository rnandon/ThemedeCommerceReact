import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function useLogin () {
    const [data, setData] = useState({});
    useEffect(() => {
        if (data.data) {
            localStorage.setItem('token', data.data.token);
            window.location.reload(true);
        }
    }, [data])

    async function send(values, setError) {
        const response = await axios.post("https://localhost:44394/api/authentication/login", values);
        if (response.data) {
            setData(response);
        } else if (response.status === 400){
            setError("Username or password is incorrect.");
        }
    }

    return [send];
}