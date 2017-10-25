import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getListOfEmployees } from '../../ducks/reducer';
import SearchAutoComplete from './SearchAutoComplete';
import './Nav.css'


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            usersList: [],
            value: '',
            targetValue: '',
            userId: ''

        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    componentDidMount() {
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

    render() {
        console.log(this.state.userId)
        if (!this.props.user.id) {
            return (
                <div>
                    <ul>
                        {/* --NOT LOGGED IN NAV-- */}
                        < li > <NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
                        {/* <li><NavLink activeClassName='active' exact to='/Login'>Login</NavLink></li> */}
                        <li><a href={process.env.REACT_APP_LOGIN}><button>Login</button></a> </li>
            </ul>
                </div>
            )
        } else {
            
            
            return (
                <div>
                    <ul>
                        {/* --LOGGED IN NAV-- */}
                        <li>{this.state.usersList.length ? <SearchAutoComplete
                            userData={this.state.usersList}
                            changeHandler={this.changeHandler}
                            handleValue={this.handleValue}
                            value={this.state.value}
                        />
                            : null}
                            <NavLink activeClassName='active' exact to={`/friendprofile/${this.state.userId}`}>Search</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/profile'>Profile</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/GivePoints'>Give Points</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/Shop'>Shop</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/cart'>Cart ( ${/*{ cartTotal }*/} )</NavLink></li>
                            <li>{this.props.user.userrole === 'admin' ? <NavLink activeClassName='active' exact to='/admin'>Admin</NavLink> : null}</li>
                    <li><a href='http://localhost:3005/auth/logout'><button>Log out</button></a></li>
                    </ul>
                </div>
            )
        }
        <div>



            {/*  <li><NavLink activeClassName='active' exact to='/AllEmployees'>Search All Employees</NavLink></li>*/}
            {/*  <li><NavLink activeClassName='active' exact to='/Balances'>Balances</NavLink></li>*/}
            {/* {this.props.user.userrole === 'admin' ? 'IS ADMIN' : 'NOT ADMIN'} */}
            {/* <li><NavLink activeClassName='active' exact to='/AutoCompleteSearch'>Auto Complete Search</NavLink></li> */}
            {/* <li><NavLink activeClassName='active' exact to='/Logout'>Logout</NavLink></li> */}
            {/* <li><NavLink activeClassName='active' exact to='/details'>Details</NavLink></li>*/}


        </div >

    }
}

function mapStateToProps({ user }) {
    console.log('state from Nav', user)
    return { user };
}

export default connect(mapStateToProps)(Nav);