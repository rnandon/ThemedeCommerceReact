import './App.css';
import React from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Footer from './components/Elements/Footer/Footer';

import Navbar from './components/Elements/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';
import ProductDetail from './components/Pages/ProductDetail/ProductDetail';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Account from './components/Pages/Account/Account';
import Cart from './components/Pages/Cart/Cart';
import UploadItem from './components/Pages/UploadItem/UploadItem';

function App() {
    // Get local login if there is one
    const [user, setUser] = useState(null);
    const jwt = localStorage.getItem('token');
    useEffect(() => {
        try{
            const localUser = jwtDecode(jwt);
            setUser(localUser);
        } catch {

        }
    }, [])

    return (
        
        <Router>
            <Navbar user={user} />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search/:searchTerm" component={Search} />
                <Route path="/ProductDetail/:productId" component={ProductDetail} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/account" component={Account} />
                <Route path="/cart" component={Cart} />
                <Route path="/Upload" component={UploadItem} />
            </Switch>
        </Router>
        
    );
}

export default App;

function App() {
    return (
        <Footer />
    );
}
export default App;