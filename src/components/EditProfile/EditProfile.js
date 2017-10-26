import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditProfile.css';
import axios from 'axios';

class EditProfile extends Component {
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
            employeeid: '',
            saved: ''

        }
        this.updateUser = this.updateUser.bind(this)
    }

    componentWillMount(){
        const user = this.props.user;

        this.setState({
            userrole: user.userrole,
            companyid: 1,
            lastname: user.lastname,
            firstname: user.firstname,
            reportsto: user.reportsto,
            email: user.email,
            pointbalance: user.pointbalance,
            allowancebalance: user.allowancebalance,
            employeeid: user.employeeid
        })
    }

    updateUser() {
        const { employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance } = this.state
        axios.put('/api/edit/user', { employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance }).then(res => {
            this.setState({
                user: res.data,
                saved: 'CHANGES SAVED!'
            })
        })
    }


    render() {
        const user = this.props.user;
        console.log('this.state edit profile',this.state)
        return (
            <div className='App'>
                <h1>Edit Profile</h1>
                {console.log(this.state)}

                <div className='edit-profile-'>First Name: <input name='firstname' type='text' value={this.state.firstname} onChange={(e) => {
                    this.setState({
                        firstname: e.target.value
                    })
                }} /></div>

                <div className='edit-profile-'>Last Name: <input name='lastname' type='text' value={this.state.lastname} onChange={(e) => {
                    this.setState({
                        lastname: e.target.value
                    })
                }} /></div>
                <div className='edit-profile-email'>Email Address: {user.email} </div>
                <div className='edit-profile-pointbalance'> Starting Point Balance: {user.pointbalance}</div>
                <div className='edit-profile-allowancebalance'> Starting Point Allowance: {user.allowancebalance}</div>
                <div className='edit-profile-reportsto'>  Reports To: {user.reportsto}</div>
                <div className='edit-profile-userrole'> User Role: {user.userrole}</div>
                <div>
{this.state.saved===''?<button onClick={this.updateUser}>Update User!</button>: this.state.saved}
                    
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


export default connect(mapStateToProps)(EditProfile);