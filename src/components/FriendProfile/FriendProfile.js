import React, { Component } from 'react';
import './FriendProfile.css';
import axios from 'axios';
import {getUserInfo} from '../../ducks/reducer';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';


class FriendProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            friendInfo:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get(`/api/user/${this.props.match.params.id}`).then(res=>{
            this.setState({
                friendInfo: res.data
            });
        })
    }

    render() {
        const user = this.state.friendInfo;
        console.log('friend info user: ',user)
        return (
            <div className=''>

                <h3>{`${user.firstname} ${user.lastname}'s Profile`}</h3>
                {<img className='avatar' src={user.img} alt=''/>}
                <p>Username: {user.firstname}</p>
                <p>Email: {user.email} </p>
                <p>Auth ID: {user.auth_id} </p>
                <p>EmployeeID: {user.employeeid} </p>
                <p>allowancebalance: {user.allowancebalance} </p>
                <p>pointbalance: {user.pointbalance} </p>
                <p>userrole: {user.userrole} </p>
            </div>
        )
    }
}


export default withRouter(FriendProfile);

