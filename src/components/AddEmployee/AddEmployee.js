import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './AddEmployee.css';
import axios from 'axios';
import SearchAutoComplete from './SearchAutoComplete';
import { Link } from 'react-router-dom';



export default class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            userrole: '',
            companyid: 1,
            viewName: '',
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

    handleValue(value,id) {

        this.setState({
            value: value,
            reportsto: id
        })
    }

    saveUser() {
        const { userrole, companyid, viewName,/*lastname, firstname, */ reportsto, email, pointbalance, allowancebalance } = this.state
        axios.post('/api/add/user', { userrole, companyid, viewName,/*lastname, firstname, */ reportsto, email, pointbalance, allowancebalance }).then(res => {
            this.setState({
                user: res.data
            })
        })
    }


    render() {
        // console.log(this.state.usersList)
        return (
            <div className='App'>
                <h1>Add Employee</h1>


                <input name='viewName' placeholder='View Name' type='text' value={this.state.viewName} onChange={(e) => {
                    this.setState({
                        viewName: e.target.value
                    })
                }} />

               {/*  <input name='lastname' placeholder='Last Name' type='text' value={this.state.lastname} onChange={(e) => {
                    this.setState({
                        lastname: e.target.value
                    })
                }} /> */}

                <input name='email' placeholder='Email Address' type='text' value={this.state.email} onChange={(e) => {
                    this.setState({
                        email: e.target.value
                    })
                }} />

                <input name='pointbalance' placeholder='Starting Balance' type='text' value={this.state.pointbalance} onChange={(e) => {
                    this.setState({
                        pointbalance: e.target.value
                    })
                }} />

                <input name='allowancebalance' placeholder='Starting Allowance' type='text' value={this.state.allowancebalance} onChange={(e) => {
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
                    {/* {console.log('this is the state', this.state.reportsto)} */}


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

                   <Link to='/admin'>
                    <button onClick={this.saveUser}>Save!</button>
                   </Link>
                </div>




            </div>
        );
    };
};