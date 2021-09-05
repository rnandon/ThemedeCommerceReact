import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Product from '../../Elements/Product/Product';

const Cart = (props) => {
    const user = props.user;
    console.log(user.id);
    const cartUri = `https://localhost:44394/api/cart/user/${user.id}`;
    console.log(cartUri);
    const token = localStorage.getItem('token');
    const auth = { Authorization: `Bearer ${token}` };
    const [cart, setCart] = useState();

    async function getCart() {
        let response = await axios.get(cartUri, { headers: auth });
        if (response.data){
            setCart(response.data);
        }
    }

    useEffect(() => {
        getCart();
    }, [])
    
    if (cart) {
        if (cart.length === 0) {
            return (
                <h1>No items in your cart.</h1>
            )
        } else {
            let total = 0;
            const cartItems = cart.map((item) => {
                total += item.price;
                return <Product product={item} />
            })
            return (
                <div>
                    <h1>Your cart:</h1>
                    {cartItems}
                    <h2>Total price: {total}</h2>
                </div>
            )
        }
        
    } else {
        return (
            <h1>Retrieving your cart...</h1>
        )
    }
}

export default Cart;