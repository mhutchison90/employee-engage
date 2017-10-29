import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getListOfEmployees } from '../../ducks/reducer';
import SearchAutoComplete from './SearchAutoComplete';
import './Nav.css';
import notification from '../../assets/notification.svg';
import Notification from './Notification'

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            usersList: [],
            value: '',
            targetValue: '',
            userId: '',
            showNotification: true

        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
        this.toggle_showNotification = this.toggle_showNotification.bind(this)
    }

    componentDidMount() {
        this.toggle_showNotification('dropdown-content')
        axios.get('/api/list/users').then(res => {
            // console.log('res.data: ',res.data)
            // console.log('res.data.id: ',res.data)
            this.setState({
                usersList: res.data
            })
        })
    }
    changeHandler(e) {
        this.setState({
            value: e
        })
    }

    handleValue(value, id) {

        this.setState({
            value: value,
            userId: id
        })
    }

    toggle_showNotification(element_id) {
        var element = document.getElementById(element_id);
        // element.style.display = (element.style.display != 'none' ? 'none' : 'block');
        if (this.state.showNotification === false) {
            element.style.display = (element.style.display = 'block');
            this.setState({
                showNotification: true
            })
        } else {
            element.style.display = (element.style.display = 'none');
            this.setState({
                showNotification: false
            })
        }
    }

    render() {
        console.log(this.state.userId)
        //if (!this.props.user.id) {
        if (1 === 2) {
            return (
                <div className='Nav-Bar-Container'>
                    <div className='nav-bar'>
                        <ul className='nav-ul-links'>
                            {/* --NOT LOGGED IN NAV-- */}
                            < li className='li-nav-link'> <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink></li>
                            < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/Login'>Login</NavLink></li>
                            < li className='li-nav-link'><a href={process.env.REACT_APP_LOGIN}><button>Login</button></a> </li>
                        </ul>
                    </div>
                </div>
            )
        } else {


            return (
                <div className='Nav-Bar-Container'>
                    <div className='nav-bar'>
                        <ul className='nav-ul-links'>
                            {/* --LOGGED IN NAV-- */}
                            < li className='li-nav-search-bar'>{this.state.usersList.length ? <SearchAutoComplete
                                userData={this.state.usersList}
                                changeHandler={this.changeHandler}
                                handleValue={this.handleValue}
                                value={this.state.value}
                            />
                                : null}
                                <NavLink className='li-nav-search-button' activeClassName='active' exact to={`/friendprofile/${this.state.userId}`}>Search</NavLink></li>
                                < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/dashboard'>Dashboard</NavLink></li>
                            < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/profile'>Profile</NavLink></li>
                            < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/GivePoints'>Give Points</NavLink></li>
                            < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/Shop'>Shop</NavLink></li>
                            < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/cart'>Cart ( ${/*{ cartTotal }*/} )</NavLink></li>
                            < li className='li-nav-link'>{this.props.user.userrole === 'admin' ? <NavLink className='nav-link' activeClassName='active' exact to='/admin'>Admin</NavLink> : null}</li>
                            < li className='li-nav-link'><a href='http://localhost:3005/auth/logout'><button>Log out</button></a></li>
                            < li className='li-nav-link'> <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink></li>
                            {/* < li className='li-nav-link-image' onClick={_ => { this.toggle_showNotification('dropdown-content') }}> <NavLink className='nav-link-image' exact to='/profile'><img className='nav-bar-profile-image' src={this.props.user.img} alt='' /></NavLink></li> */}

                            <div className='li-nav-link-notification'> <NavLink className='nav-link-notification' exact to='/profile' onClick={_ => { this.toggle_showNotification('dropdown-content') }}><img className='nav-bar-profile-image' onClick={_ => { this.toggle_showNotification('dropdown-content') }} src={this.props.user.img} alt='' />000</NavLink> </div>
                        </ul>

                    </div>
                    <div class="dropdown">
                        <div class="dropbtn"><img className='nav-bar-notification-svg' src={notification} alt='' /></div>
                        <div id="dropdown-content">
                            <a href="#">Rob Aschliman just sent you some points!</a>
                            <a href="#">Thank you for purchasing a Diet Mtn Dew</a>
                            <a href="#">Emily Hutchison just sent you some points!</a>
                        </div>
                    </div>
                </div>
            )
        }
        <div>



            {/*  < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/AllEmployees'>Search All Employees</NavLink></li>*/}
            {/*  < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/Balances'>Balances</NavLink></li>*/}
            {/* {this.props.user.userrole === 'admin' ? 'IS ADMIN' : 'NOT ADMIN'} */}
            {/* < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/AutoCompleteSearch'>Auto Complete Search</NavLink></li> */}
            {/* < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/Logout'>Logout</NavLink></li> */}
            {/* < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/details'>Details</NavLink></li>*/}


        </div >

    }
}

function mapStateToProps({ user }) {
    console.log('state from Nav', user)
    return { user };
}

export default connect(mapStateToProps)(Nav);