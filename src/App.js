import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home'

class App extends React.Component {
    render() {
        return ( 
        <div>
            <Navbar/>
            <Home/>
        </div>
        )
    }
}

export default App;