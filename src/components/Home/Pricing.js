import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'


export default class Pricing extends Component {
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
                   <h1> Worth every penny.</h1>
                   </header>
                <p>Our software solution enables enterprises to have an energetic and positive environment where people are anxious to help each other. We do this by giving every employee a little inﬂuence currency they can use to say thanks to those who are helping to build the company.</p>
                <div id="hiw-login-container"></div>
                <div>
                </div>




            </div>
            </div>
        );
    };
};
