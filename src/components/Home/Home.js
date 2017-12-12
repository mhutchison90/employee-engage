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
                <div>
                    <ul>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/About'>About</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/Pricing'>Pricing</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/Contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <h1>HOME</h1>
                <p>
                Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div id="hiw-login-container"></div>
                <div>
                </div>




            </div>
        );
    };
};
