import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Product from '../../Elements/Product/Product';

const Cart = (props) => {
    console.log(props);
    const user = props.user;
    console.log(user.id);
    const cartUri = `https://localhost:44394/api/cart/user/${user.id}`;
    console.log(cartUri);
    const token = localStorage.getItem('token');
    const auth = { Authorization: `Bearer ${token}` };
    const [cart, setCart] = useState();
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    async function getCart() {
        let response = await axios.get(cartUri, { headers: auth });
        if (response.data){
            setCart(response.data);
        }
    }

    async function checkout() {
        const currentTime = new Date();
        const newOrder = {
            "userid": user.id,
            "year": currentTime.getFullYear(),
            "month": currentTime.getUTCMonth(),
            "day": currentTime.getDate(),
            "hours": currentTime.getHours(),
            "minutes": currentTime.getMinutes(),
            "seconds": currentTime.getSeconds()
        }
        let response = await axios.post("https://localhost:44394/api/order", newOrder, { headers: auth });
        if (response.data){
            // Response contains order id
            debugger;
            const productOrders = cart.map((entry) => {
                return {
                    "productid": entry.product.productId,
                    "quantity": entry.quantity,
                    "orderid": response.data.orderId
                };
            });

            let newOrderResponse = await axios.post("https://localhost:44394/api/productorder/order", productOrders, { headers: auth });
            if (newOrderResponse){
                setOrderConfirmed(true);
                cart.map((entry) => {
                    axios.delete(`https://localhost:44394/api/cart/${entry.cartId}`, { headers: auth });
                })
                getCart();
            }
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
                total += item.product.price;
                return <Product product={item.product} />
            })
            return (
                <div>
                    <h1>Your cart:</h1>
                    {cartItems}
                    <h2>Total price: {total}</h2>
                    <button onClick={checkout} >Checkout</button>
                    {orderConfirmed && <h2>Order placed!</h2>}
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