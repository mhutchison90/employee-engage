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
                    <div className='f-user-name-header'>{user.id ? user.viewname + "'s Profile" : null}</div>
                    {/* <div className='f-profile-image'>{user.id ? <img className='f-profile-picture' src={user.img} alt='' /> : null}</div> */}
                </div>

                <div className='f-profile-user-info-container'>
                <div className='f-profile-image'>{user.id ? <img className='f-profile-picture' src={user.img} alt='' /> : null}</div>
                    <div className='f-profile-user-name'>{user.id ? user.viewname : null}</div>
                    <div className='f-profile-email'>{user.id ? user.email : null} </div>
                    <div className='f-profile-employee-id'>{user.id ? user.employeeid : null} </div>
                    <div className='f-profile-allowancebalance'>{user.id ? user.allowancebalance : null} </div>
                    <div className='f-profile-pointbalance'>{user.id ? user.pointbalance : null} </div>
                    <div className='f-profile-userrole'>{user.id ? user.userrole : null} </div>
                    <div className='BIO-Label'> Bio: </div>
                    <div className='f-profile-bio'>{user.id ? user.bio : null} </div>
                </div>
                <div className='f-profile-user-info'>
                </div>
            </div>
        )
    }
}


export default withRouter(FriendProfile);

