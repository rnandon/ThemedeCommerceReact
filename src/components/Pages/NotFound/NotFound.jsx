import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Something went wrong.</h1>
            <h2>We weren't able to find what you were looking for.</h2>
            <h2>Click <Link to="/">here</Link> to go back to the home page.</h2>
        </div>
    )
}

export default NotFound;