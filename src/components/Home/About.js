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
                <header>
                <h1> Employee Engage </h1>
               <h3> Is a software that allows employees to...</h3>
               </header>
               <p>Show Peer to Peer Recognition</p>
               <p>Get Rewards, Gifts, and SWAG</p>
               <p>User Profiles that Connect Employees</p>
               <p>Feel Part Of The Team</p>
               <p></p>
               <p></p>
                <div id="hiw-login-container"></div>
                <div>
                </div>




            </div>
            </div>
        );
    };
};
