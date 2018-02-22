import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getListOfEmployees } from '../../ducks/reducer';
import SearchAutoComplete from './SearchAutoComplete';
import './Nav.css';
import notificationIcon from '../../assets/notification.svg';
import mobileMenu from '../../assets/mobileMenu.svg';
// import Notification from './Notification'

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
    }

    componentDidMount() {
        axios.get('/api/list/users').then(res => {
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

    render() {
        if (!this.props.user.id) {
        // if (1 + 1 === 3) {
            return (
                <div className='Nav-Bar-Container'>
                    <div className='nav-bar'>
                        <ul className='nav-ul-links'>
                            {/* --NOT LOGGED IN NAV-- */}
                            < li className='li-nav-link'> <NavLink className='nav-link' activeClassName='active' exact to='/'>Welcome To Employee Engage</NavLink></li>
                            {/* < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/Login'>Login</NavLink></li> */}
                            {/* < li className='li-nav-link'><a href={process.env.REACT_APP_LOGIN}><button>Login</button></a> </li>
                            < li className='li-nav-link-demo'><Link to={'/dashboard'}><button id='demoButton'>Go To Dashboard (demo)</button></Link> </li> */}
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
                            < li className='li-nav-link'><NavLink className='nav-link' activeClassName='active' exact to='/Shop'>Shop</NavLink></li>
                            < li className='li-nav-link'>{this.props.user.userrole === 'admin' ? <NavLink className='nav-link' activeClassName='active' exact to='/admin'>Admin</NavLink> : null}</li>
                        </ul>

                        <div className='nav-logout-button'>
                            < div className='nav-logout-link'><a className='nav-logout-link' href='/auth/logout'>Log out</a></div>
                        </div>
                    </div>
                    <div className='mobile-nav-bar'>
                        <div className='mobile-nav-dropdown'>
                            <div className="mobile-dropbtn"><img className='mobile-nav-bar-menu-svg' src={mobileMenu} alt='' /></div>
                            <div className='mobile-dropdown-content' >
                                < div className='mobile-nav-search-bar'>{this.state.usersList.length ? <SearchAutoComplete
                                    userData={this.state.usersList}
                                    changeHandler={this.changeHandler}
                                    handleValue={this.handleValue}
                                    value={this.state.value}
                                />
                                    : null}
                                    <NavLink className='li-nav-search-button' activeClassName='active' exact to={`/friendprofile/${this.state.userId}`}>Search</NavLink></div>
                                <div className='mobile-nav-link-container'><NavLink className='mobile-nav-link' activeClassName='active' exact to='/dashboard'>Dashboard</NavLink></div>
                                <div className='mobile-nav-link-container'><NavLink className='mobile-nav-link' activeClassName='active' exact to='/profile'>Profile</NavLink></div>
                                <div className='mobile-nav-link-container'><NavLink className='mobile-nav-link' activeClassName='active' exact to='/Shop'>Shop</NavLink></div>
                                <div className='mobile-nav-link-container'>{this.props.user.userrole === 'admin' ? <NavLink className='mobile-nav-link' activeClassName='active' exact to='/admin'>Admin</NavLink> : null}</div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropbtn"><img className='nav-bar-notification-svg' src={notificationIcon} alt='' /></div>
                        
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps({ user }) {
    // console.log('state from Nav', user)
    return { user };
}

export default connect(mapStateToProps)(Nav);