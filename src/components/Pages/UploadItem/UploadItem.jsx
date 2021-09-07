import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import useForm from '../../../hooks/useForm';

const UploadItem = () => {
    const history = useHistory();
    const sendNewProduct = () => {
        console.log(formValues);
        // uploadProduct(formValues);
        history.push("/");
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
            <div class="mb-3">
                <label for="categoryInput" class="form-label">Category</label>
                <input type="text" name="category" value={formValues.category} onChange={handleChange} class="form-control" id="categoryInput" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default UploadItem;