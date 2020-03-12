import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Navbar.css'

export default () => {
    return(
        <Router>
        <div className="Navbar">
            <ul>
                <li>Home</li>
                <li>Post</li>
                <li>About</li>
            </ul>
        </div>
        <Route>
            
        </Route>
        </Router>
    )
}