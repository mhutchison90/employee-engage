import React, { Component } from 'react';
import './FriendProfile.css';
import axios from 'axios';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class FriendProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            friendInfo: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`/api/user/${this.props.match.params.id}`).then(res => {
            this.setState({
                friendInfo: res.data
            });
        })
    }

    render() {
        const user = this.state.friendInfo;
        console.log('friend info user: ', user)
        return (
            <div className='Profile-Body-Container'>
                <div className='Profile-User-Info-Container'></div>
                <div className='profile-user-info'>
                    <div className='user-name-header'>{user.id ? user.user_name + "'s Profile" : null}</div>
                    <div className='profile-image'>{user.id ? <img className='profile-picture' src={user.img} alt='' /> : null}</div>
                    <div className='profile-user-name'><p>Username: {user.id ? user.user_name : null}</p></div>
                    <div className='profile-email'><p>Email: {user.id ? user.email : null} </p></div>
                    <div className='profile-authid'><p>Auth ID: {user.id ? user.auth_id : null} </p></div>
                    <div className='profile-employee-id'><p>EmployeeID: {user.id ? user.employeeid : null} </p></div>
                    <div className='profile-allowancebalance'><p>allowancebalance: {user.id ? user.allowancebalance : null} </p></div>
                    <div className='profile-pointbalance'><p>pointbalance: {user.id ? user.pointbalance : null} </p></div>
                    <div className='profile-userrole'><p>userrole: {user.id ? user.userrole : null} </p></div>
                </div>
            </div>
        )
    }
}


export default withRouter(FriendProfile);

