import React, { Component } from 'react';
import './Logout.css';


export default class Logout extends Component {
    render() {
        return (
            <div className='App'>  
                <h1>GOODBYE</h1>
                <h3><a href='http://localhost:3000/#/'> Log back in</a></h3>
            </div> 
        )
    }
}