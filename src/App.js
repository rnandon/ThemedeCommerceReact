import './App.css';
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
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
    // Get local login if there is one
    const [user, setUser] = useState(null);
    const jwt = localStorage.getItem('token');
    const deleteItem = useState(null);
    useEffect(() => {
        try{
            const localUser = jwtDecode(jwt);
            setUser(localUser);
        } catch {}
    }, [])


    
    return (
        
        <><Router>
            <Navbar user={user} />
            

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search/:searchTerm" component={Search} />
                <Route path="/product/:productId" render={props => <ProductDetail {...props} user={user} /> } />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/account" render={props => <Account {...props} user={user} /> } />
                <Route path="/cart" render={props => <Cart {...props} user={user} /> } />
                <Route path="/Upload" render={props => <UploadItem {...props} user={user} /> } />
                <Route path="/notfound" component={NotFound} />
                <Route path="*" component={NotFound} />
            </Switch>
            <div className="bgOpacity">
      <div className="App">
        <h1>Welcome!</h1>
        <h2>Shop/Buy/Sell</h2>
      </div>
    </div>
        </Router><Footer /></> 
        
    );
}

export default App;

