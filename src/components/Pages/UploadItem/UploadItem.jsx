import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import useForm from '../../../hooks/useForm';

const UploadItem = (props) => {
    const history = useHistory();
    const [categories, setCategories] = useState(false);
    async function getCategories() {
        // Retrieve all category values stored in the db for filtering
        let categoryResponse = await axios.get("https://localhost:44394/api/category");
        if (categoryResponse.data.length >= 0) {
            const retrievedCategories = categoryResponse.data;
            const categoryOptions = retrievedCategories.map((category) => {
                return (
                        <option value={category.categoryId}>{category.name}</option>
                        
                )
            })
            setCategories(categoryOptions);
        }
    }
    useEffect(() => {getCategories()}, []);

    async function sendNewProduct() {
        console.log("Sending new product");
        const token = localStorage.getItem('token');
        let newProduct = formValues;
        newProduct.price = parseFloat(newProduct.price);
        newProduct.userId = props.user.id;
        console.log(newProduct.categoryId);
        newProduct.categoryId = parseInt(newProduct.categoryId);
        let response = axios.post("https://localhost:44394/api/product", formValues, { headers: { Authorization: `Bearer ${token}` }});
        if (response.data) {
            console.log("Added new product");
        }
        history.push("/account");
    }

    const { formValues, handleChange, handleSubmit } = useForm(sendNewProduct);

    return (
        <form onSubmit={handleSubmit} >
            <h1></h1>
            <div class="mb-3">
                <label for="productNameInput" class="form-label">Product Name</label>
                <input type="text" name="productName" value={formValues.name} onChange={handleChange} class="form-control" id="productNameInput" />
            </div>
            <div class="mb-3">
                <label for="priceInput" class="form-label">Price</label>
                <input type="text" name="price" value={formValues.price} onChange={handleChange} class="form-control" id="priceInput" />
            </div>
            <div class="mb-3">
                <label for="descriptionInput" class="form-label">Description</label>
                <input type="text" name="description" value={formValues.description} onChange={handleChange} class="form-control" id="descriptionInput" />
            </div>
            <select  name="categoryId" class="form-select" aria-label="Category select" onChange={handleChange} >
                <option default>Category</option>
                {categories}
            </select>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default UploadItem;