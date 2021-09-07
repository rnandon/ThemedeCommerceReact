import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Link to={`/product/${product.productId}`} className="row">
            <div className="col-xs-5">
                { /* Image block */ }
            </div>
            <div className="col-xs-7">
                { /* Description block */ }
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
            </div>
        </Link>
    )
}

export default Product;

// Sample data, based off actual pull from db
// category: {categoryId: 2, name: 'Things', description: "They're things"}
// categoryId: 2
// description: "A pile of data"
// name: "Data"
// price: 20000000
// productId: 3
// seller: null
// userId: "5908f624-487a-4852-9e80-17673687898e" <- will only exist in one context, not really sensitive
