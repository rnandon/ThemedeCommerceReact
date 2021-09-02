import './App.css';
import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <navbar className="App-header">
            
                </navbar>
            </div>

            <Switch>
                <Route path="/" exact component={Home} />
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