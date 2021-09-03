import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
    // Store the search values before executing a search
    let [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
            Memorabilia
        </NavLink>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/register">
                Register
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                    Account Info
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                Shopping Cart
                </NavLink>
            </li>
            <li className="nav-item dropdown">
                <NavLink
                    className="nav-link dropdown-toggle"
                    to="/home/cart"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "gray" }}
                >
                Products
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <NavLink
                    className="dropdown-item"
                    to="/"
                    style={{ color: "black", backgroundColor: "grey" }}
                    >
                    Category
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="dropdown-item"
                        to="/"
                        style={{ color: "black", backgroundColor: "white" }}
                    >
                    Category
                    </NavLink>
                    </li>
                <li>
                    <NavLink
                        className="dropdown-item"
                        to="/"
                        style={{ color: "black", backgroundColor: "grey" }}
                    >
                    Category
                    </NavLink>
                </li>
                </ul>
            </li>
            </ul>
            <form className="d-flex" method="get" action={"/"}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <Link to={`/search/${searchTerm}`}>
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
            </Link>
            </form>
        </div>
        </div>
    </nav>
    </>
);
}
export default Navbar;