import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }



    render() {
        return (
            <div className='App'>
                <div>
                    <ul>
                        <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/About'>About</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/Pricing'>Pricing</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/Contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <h1>HOME</h1>
                <button>Learn More</button>
                <h1>HOME</h1>
                <div id="hiw-login-container"></div>
                <div>
                </div>




            </div>
        );
    };
};
