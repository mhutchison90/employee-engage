import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from '../Login/Login';


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
                <div id="hiw-login-container"><Link to={'/dashboard'}><button> START HERE </button></Link></div>
                <div>
                </div>




            </div>
            </div>
        );
    };
};
