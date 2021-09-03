import React from 'react';

const Account = () => {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload(true);
    }
    return (
        <button onClick={logout}>Log out</button>
    )
}

export default Account;