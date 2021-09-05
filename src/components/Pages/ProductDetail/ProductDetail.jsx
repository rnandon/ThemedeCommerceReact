import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useDataRetrieval from '../../../hooks/useDataRetrieval';

const ProductDetail = (props) => {
    const history = useHistory();
    const productId = props.match.params.productId;
    const data = useDataRetrieval(`https://localhost:44394/api/product/${productId}`);
    const [product, setProduct] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const incrementQty = () => { setQuantity(quantity + 1) };
    const decrementQty = () => {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1);
    };


    const [addedToCart, setAddedToCart] = useState(false);

    async function addToCart() {
        const token = localStorage.getItem('token');
        const auth = { Authorization: `Bearer ${token}`};
        const userId = props.user.id;
        const newCartEntry = {
            "userid": userId,
            "productid": parseInt(productId),
            "quantity": quantity
        }

        const response = await axios.post("https://localhost:44394/api/cart", newCartEntry, { headers: auth });
        if (response.data) {
            setAddedToCart(true);
        }

        setQuantity(1);
    }

    useEffect(() => {
        try{
            // Check if the data is actually usable, then set product to it
            if (data.data.name) {
                setProduct(data.data);
            } else if (data.data.status === 404) {
                history.push("/notfound");
            }
        } catch (err) {
            // Don't need to do anything
        }
    }, [data])

    if (product) {
        // Only works if the product is actually found
        return (
            <div>
                <h1>Name: {product.name}</h1>
                <p>Description: {product.description}
                <br />Price: {product.price}</p>
                <div>
                    { /* Add to cart section */ }
                    <button onClick={decrementQty} >-</button>
                    <p>{quantity}</p>
                    <button onClick={incrementQty} >+</button>
                    <button onClick={addToCart} >Add to cart</button>
                    {addedToCart && <h2>Successfully added to cart!</h2>}
                </div>
            </div>
        )
    } else {
        return (
            <h1>Waiting on data...</h1>
        )
    }

}

export default ProductDetail;


/* Sample product response
{
    "productId": 2,
    "name": "Stuff",
    "price": 200.00,
    "description": "A bunch of stuff",
    "categoryId": 1,
    "category": null,
    "userId": "5908f624-487a-4852-9e80-17673687898e",
    "seller": null
}
*/