import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './AddEmployee.css';
import axios from 'axios';

export default class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            user:[],
            // userrole: '',
            // companyid: 0,
            // lastname: '',
            // firstname: '',
            // reportsto: 0,
            // email: '',
            // pointbalance: 0,
            // allowancebalance: 0
            userrole: 'employee',
            companyid: 1,
            lastname: 'test',
            firstname: 'test',
            reportsto: 1,
            email: 'test@test.com',
            pointbalance: 750,
            allowancebalance: 2000
        }
        this.saveUser=this.saveUser.bind(this)
    }

    saveUser() {
        const {userrole, companyid, lastname, firstname, reportsto, email,	pointbalance, allowancebalance} = this.state
        axios.post('/api/adduser', {userrole, companyid, lastname, firstname, reportsto, email,	pointbalance, allowancebalance}).then(res => {
          this.setState({
            user: res.data
          })
        })
      }


    render() {
        return (
            <div className='App'>
                {console.log(this.state)}

                User Role: <select name="userrole" onChange={(e) => {
                    this.setState({
                        userrole: e.target.value
                    })
                }}>
                    <option value=""></option>
                    <option value="employee">employee</option>
                    <option value="admin">admin</option>
                </select>

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

                Starting Point Balance: <input name='pointbalance' type='text' value={this.state.pointbalance} onChange={(e) => {
                    this.setState({
                        pointbalance: e.target.value
                    })
                }} />

                Starting Point Allowance: <input name='allowancebalance' type='text' value={this.state.allowancebalance} onChange={(e) => {
                    this.setState({
                        allowancebalance: e.target.value
                    })
                }} />

                <div>

                    <button onClick={this.saveUser}>Save!</button>
                </div>




            </div>
        );
    };
};
