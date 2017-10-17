import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './AddEmployee.css';
import axios from 'axios';
import SearchAutoComplete from './SearchAutoComplete';


export default class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            userrole: '',
            companyid: 1,
            lastname: '',
            firstname: '',
            reportsto: '',
            email: '',
            pointbalance: '',
            allowancebalance: '',
            usersList: [],
            value: '',
            targetValue: ''

        }
        this.saveUser = this.saveUser.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    componentDidMount() {
        axios.get('/api/list/users').then(res => {
            // console.log(res)
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

    handleValue(value) {

        this.setState({
            value: value
        })
    }

    saveUser() {
        const { userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance } = this.state
        axios.post('/api/add/user', { userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance }).then(res => {
            this.setState({
                user: res.data
            })
        })
    }


    render() {
        return (
            <div className='App'>
                <h1>Add Employee</h1>


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

                Reports To: {this.state.usersList.length ? <SearchAutoComplete
                    userData={this.state.usersList}
                    changeHandler={this.changeHandler}
                    handleValue={this.handleValue}
                    value={this.state.value}
                />
                    : null}


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

                    <button onClick={this.saveUser}>Save!</button>
                {console.log('Value: ',this.state.value)}
                {console.log('reportsto',this.state.reportsto)}
                </div>




            </div>
        );
    };
};