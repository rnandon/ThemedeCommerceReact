import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload(true);
    }
    return (
        <div>
            <Link to="/Upload"><p>Upload New Product</p></Link>
            <button onClick={logout}>Log out</button>
        </div>        
    )
}

export default Account;