import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useDataRetrieval from '../../../hooks/useDataRetrieval';

const ProductDetail = (props) => {
    const history = useHistory();
    const productId = props.match.params.productId;
    const data = useDataRetrieval(`https://localhost:44394/api/product/${productId}`);
    const [product, setProduct] = useState(false);

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