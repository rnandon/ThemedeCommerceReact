import React from 'react';
import { Link } from 'react-router-dom';

const AccountTab = ({ user }) => {
    return (
        <div>
            {/* if not logged in, render login button */}
            {!user && <Link to="/login">Login</Link>}

            {/* else, render account info button */}
            {user && <Link to="/account">Account</Link>}
        </div>
    )
}

export default AccountTab;