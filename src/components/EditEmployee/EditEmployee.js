import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditEmployee.css';
import axios from 'axios';

class EditEmployee extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            userrole: '',
            companyid: 1,
            lastname: '',
            firstname: '',
            reportsto: null,
            email: '',
            pointbalance: null,
            allowancebalance: null

        }
        this.updateUser = this.updateUser.bind(this)
    }

    updateUser() {
        const { employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance } = this.state
        axios.post('/api/edit/user', { employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance }).then(res => {
            this.setState({
                user: res.data
            })
        })
    }


    render() {
        return (
            <div className='EditEmployee-Body-Container'>
                <h1>Edit Employee</h1>
                {console.log(this.state)}

                First Name: <input name='firstname' type='text' value={this.state.firstname} onChange={(e) => {
                    this.setState({
                        firstname: e.target.value
                    })
                }} />

                Last Name: <input name='lastname' type='text' value={this.state.lastname} onChange={(e) => {
                    this.setState({
                        lastname: e.target.value
                    })
                }} />

                Email Address: <input name='email' type='text' value={this.state.email} onChange={(e) => {
                    this.setState({
                        email: e.target.value
                    })
                }} />

                Starting Point Balance: <input name='pointbalance' placeholder='number required' type='text' value={this.state.pointbalance} onChange={(e) => {
                    this.setState({
                        pointbalance: e.target.value
                    })
                }} />

                Starting Point Allowance: <input name='allowancebalance' placeholder='number required' type='text' value={this.state.allowancebalance} onChange={(e) => {
                    this.setState({
                        allowancebalance: e.target.value
                    })
                }} />

                Reports To: <input name='reportsto' placeholder='number required' type='text' value={this.state.reportsto} onChange={(e) => {
                    this.setState({
                        reportsto: e.target.value
                    })
                }} />

                User Role: <select name="userrole" onChange={(e) => {
                    this.setState({
                        userrole: e.target.value
                    })
                }}>
                    <option value=""></option>
                    <option value="employee">employee</option>
                    <option value="admin">admin</option>
                </select>

                <div>

                    <button onClick={this.updateUser}>Update User!</button>
                </div>




            </div>
        );
    };
};

function mapStateToProps(state) {
    console.log('user state from edit employee: ', state)
    return { 
        user: state.user
     };

   }


export default connect(mapStateToProps)(EditEmployee);