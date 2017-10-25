import React, { Component } from 'react';
import './Private.css';
// import axios from 'axios';
import {getUserInfo} from '../../ducks/reducer';
import { connect } from 'react-redux';

class Private extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information: </h4>
                {user.id ? <img className='avatar' src={user.img} alt=''/> : null}
                <p>Username: {user.id ? user.user_name : null}</p>
                <p>Email: {user.id ? user.email : null} </p>
                <p>Auth ID: {user.id ? user.auth_id : null} </p>
                <p>EmployeeID: {user.id ? user.employeeid : null} </p>
                <p>allowancebalance: {user.id ? user.allowancebalance : null} </p>
                <p>pointbalance: {user.id ? user.pointbalance : null} </p>
                <p>userrole: {user.id ? user.userrole : null} </p>
                
                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from private", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,  { getUserInfo })(Private);
