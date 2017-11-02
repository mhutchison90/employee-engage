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
                <div>
                    <ul>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/About'>About</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/Pricing'>Pricing</NavLink></li>
                        <li><NavLink className='nav-link' activeClassName='active' exact to='/Contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <h1>Pricing</h1>
                <p>
                Bacon ipsum dolor amet pork chop beef ribs swine meatloaf, flank shank tongue turkey doner pig shoulder ham hock ribeye. Tail chicken brisket picanha. Corned beef kevin ball tip shank cupim hamburger tri-tip doner drumstick andouille spare ribs turkey ham filet mignon chuck. Bresaola pork chop burgdoggen, fatback meatloaf prosciutto turducken short ribs drumstick shank pig. Meatloaf brisket pork loin alcatra. Capicola swine picanha, drumstick frankfurter spare ribs sausage tri-tip. Turkey tongue sausage, meatloaf pork chop brisket ribeye short loin doner kevin ball tip leberkas.                </p>
                <div id="hiw-login-container"></div>
                <div>
                </div>




            </div>
        );
    };
};
