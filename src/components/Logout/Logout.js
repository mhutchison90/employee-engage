import React, { Component } from 'react';
import './Logout.css';


export default class Logout extends Component {
    render() {
        return (
            <div className='Logout-Container'>  
                <h1>GOODBYE</h1>
                <h3><a href='/#/'> Log back in</a></h3>
            </div> 
        )
    }
}