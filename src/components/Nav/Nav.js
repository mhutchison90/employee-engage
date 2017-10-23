import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AddEmployee'>Add Employee</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/EditEmployee'>Edit Employee</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AddProduct'>Add Product</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AllEmployees'>Search All Employees</NavLink></li>
                    {/* <li><NavLink activeClassName='active' exact to='/AutoCompleteSearch'>Auto Complete Search</NavLink></li> */}
                    <li><NavLink activeClassName='active' exact to='/GivePoints'>Give Points</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Login'>Login</NavLink></li>
                    {/* <li><NavLink activeClassName='active' exact to='/Logout'>Logout</NavLink></li> */}
                    <li><NavLink activeClassName='active' exact to='/Private'>Private</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Shop'>Shop</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Profile'>Profile</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Balances'>Balances</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/details'>Details</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/cart'>Cart</NavLink></li>

                    
                </ul>
            </div>
        )
    }
}
export default Nav

