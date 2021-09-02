import './App.css';
import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './components/Pages/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';
import ProductDetail from './components/Pages/ProductDetail/ProductDetail';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';

function App() {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search/:searchTerm" component={Search} />
                <Route path="/ProductDetail/:productId" component={ProductDetail} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;

const Home = () => {
    return (
        <Fragment>
            <h1>Under construction</h1>
        </Fragment>
    )
}