import React from 'react';
import Home from '../../Containers/Home/Home'
import About from '../../Containers/About/About'
import Post from '../../Containers/Post/Post'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Navbar.css';

export default () => {
    return(
        <Router>
        <div className="Navbar">
            <Link to="/home" className="link"><a href="#home">Home</a></Link>
            <Link to="/post" className="link"><a href="#home">Post</a></Link>
            <Link to="/about" className="link"><a href="#home">About</a></Link>
        </div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        </Router>
    )
}