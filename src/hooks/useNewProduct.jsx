import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function useNewProduct () {
    const [data, setData] = useState({});
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        if (data.data) {
            setUserInfo(data.data);
        }
    }, [data])

    async function register(values) {
        const response = await axios.post("https://localhost:44394/api/authentication", values);
        if (response.data) {
            setData(response);
        }
    }

    return { register, userInfo };
}