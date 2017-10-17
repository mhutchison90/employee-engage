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
                        <li><NavLink activeClassName='active' exact to='/About'>Add Employee</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/Pricing'>Edit Employee</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/Contact'>Add Product</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/Login'>Login</NavLink></li>
                    </ul>
                </div>
                <h1>HOME</h1>
                <button>Learn More</button>
                <h1>HOME</h1>

                <div>
                </div>




            </div>
        );
    };
};
