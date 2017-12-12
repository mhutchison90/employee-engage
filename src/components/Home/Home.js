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
            <div className='Home-Container'>
            <div id='Container'>
                <div>
                    <ul>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/About'>About</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/Pricing'>Pricing</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/Contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <h1>OUR MISSION</h1>
                <p>Life is short and we spend a lot of our waking hours in the ofﬁce. We think that life at work can and should be just as meaningful and satisifying as life off the clock. Everything we do is designed to lead to this end.</p>
                <div id="hiw-login-container"></div>
                <div>
                </div>




            </div>
            </div>
        );
    };
};
