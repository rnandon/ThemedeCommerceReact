import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useForm from '../../../hooks/useForm';
import { Link } from 'react-router-dom';

const AccountOrders = (props) => {
    const user = props.user;
    // get orders by user
    const [orders, setOrders] = useState();

    async function getOrders(user) {
        const jwt = localStorage.getItem('token');
        const auth = { "Authorization": `Bearer ${token}` };
        let response = await axios.get(`https://localhost:44394/api/order/customer/${user.id}`, { headers: auth });
        if (response.data) {
            const data = response.data;
            const components = data.map((order) => {
                return <Link to="/" >{order.orderid}</Link>
            })
            setOrders(response.data);
        }
    }

    useEffect(() => {
        getOrders(user);
    }, [])

    return (
        <div>
            <h1>Hello, {user.username}!</h1>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default AccountOrders;