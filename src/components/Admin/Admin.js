import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';



class Admin extends Component {
    constructor() {
        super();
        this.state = {
        }
    }   



    render() {
        
        return (
            <div className='Admin-Container'>
                <h3>Admin Page</h3>
                <div>
            {this.props.user.userrole === 'admin' ? 
                    <ul>
                    <li><NavLink activeClassName='active' exact to='/AddEmployee'>Add Employee</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/EditEmployee'>Edit Employee</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/AddProduct'>Add Product</NavLink></li>
                     </ul>
                     : 'NOT ADMIN'}
                </div>




            </div>
        );
    };
};





function mapStateToProps({user}) {
    console.log('state from Admin', user)
    return {user};
  }
  
  export default connect(mapStateToProps)(Admin);