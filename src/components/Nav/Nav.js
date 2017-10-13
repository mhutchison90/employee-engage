import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink activeClassName='active' exact to='/'> </NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AddEmployee'>Add Employee</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AddProduct'>Add Product</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AllEmployees'>All Employees</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AutoCompleteSearch'>Auto Complete Search</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Login'>Login</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Logout'>Logout</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/Private'>Private</NavLink></li>

                    
                </ul>
            </div>
        )
    }
}
export default Nav

