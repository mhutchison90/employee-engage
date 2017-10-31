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
            <div className='f-Profile-Body-Container'>
                <div className='f-profile-header'>
                    <div className='f-user-name-header'>{user.id ? user.user_name + "'s Profile" : null}</div>
                    <div className='f-profile-image'>{user.id ? <img className='f-profile-picture' src={user.img} alt='' /> : null}</div>
                </div>

                <div className='f-profile-user-info'>
                    <div className='f-profile-user-name'><p>Username: {user.id ? user.user_name : null}</p></div>
                    <div className='f-profile-email'><p>Email: {user.id ? user.email : null} </p></div>
                    <div className='f-profile-employee-id'><p>EmployeeID: {user.id ? user.employeeid : null} </p></div>
                    <div className='f-profile-allowancebalance'><p>allowancebalance: {user.id ? user.allowancebalance : null} </p></div>
                    <div className='f-profile-pointbalance'><p>pointbalance: {user.id ? user.pointbalance : null} </p></div>
                    <div className='f-profile-userrole'><p>userrole: {user.id ? user.userrole : null} </p></div>
                </div>
            </div>
        )
    }
}


export default withRouter(FriendProfile);

