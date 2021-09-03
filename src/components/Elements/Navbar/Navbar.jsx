import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AccountTab from '../AccountTab/AccountTab';

const Navbar = ({ user }) => {
    // Store the search values before executing a search
    let [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <nav class="navbar navbar-dark">
            <div class="container-fluid py-3">
                <Link to="/" class="navbar-brand col-sm-3"><h1 id="header">SportsSticks</h1></Link>
                <form class="d-flex col-sm-5">
                    <input class="form-control me-2" id="searchbar" type="search" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search" />
                    <Link to={`/search/${searchTerm}`}>
                        <button class="btn" id="searchButton" type="submit"><i class="fa fa-search"></i></button>
                    </Link>
                </form>
                <div class="col-sm-2">
                    <AccountTab user={user} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;