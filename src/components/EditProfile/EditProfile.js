import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import './EditProfile.css';
import axios from 'axios';
import swal from 'sweetalert';
import { Redirect } from 'react-router'

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            userrole: '',
            companyid: 1,
            lastname: '',
            firstname: '',
            profilePicture: '',
            reportsto: '',
            email: '',
            pointbalance: '',
            allowancebalance: '',
            employeeid: '',
            saved: '',
            viewname: '',
            fireRedirect: false

        }
        this.updateUser = this.updateUser.bind(this)
    }

    componentWillMount() {
        const user = this.props.user;
        // console.log('MJH HERE: ', user.viewname)
        this.setState({
            userrole: user.userrole,
            companyid: 1,
            lastname: user.lastname,
            firstname: user.firstname,
            reportsto: user.reportsto,
            email: user.email,
            pointbalance: user.pointbalance,
            allowancebalance: user.allowancebalance,
            employeeid: user.employeeid,
            profilePicture: user.img,
            viewname: user.viewname
        })
    }

    updateUser() {
        this.setState({
            viewname: this.state.firstname + ' ' + this.state.lastname
        })
        swal({
            title: "Are you sure you want to make these changes?",
            icon: "warning",
            dangerMode: true,
            buttons: ['no','yes']

        })
            .then(() => {
                const { employeeid, lastname, firstname, viewname, email, profilePicture } = this.state
                axios.put('/api/edit/user', { employeeid, lastname, firstname, viewname, email, profilePicture }).then(res => {
                    this.setState({
                        user: res.data,
                        saved: 'CHANGES SAVED!',
                        fireRedirect: true
                    })
                    this.props.getUserInfo();
                })
            });

    }


    render() {
        const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        const user = this.props.user;
        // console.log('this.state edit profile', this.user)
        return (
            <div className='Edit-Profile-Container'>
                <h1>Edit Profile</h1>
                <div className='edit-info-box'>
                    <div className='f-profile-image'><img className='f-profile-picture' src={this.state.profilePicture} alt='' /></div>
                    <div className='edit-profile-image'>(URL)<br /><input name='profile-picture' type='text' value={this.state.profilePicture} onChange={(e) => {
                        this.setState({
                            profilePicture: e.target.value
                        })
                    }} /></div>



                    <div className='f-profile-user-name'><br />
                        <input name='firstname' type='text' value={this.state.firstname} onChange={(e) => {
                            this.setState({
                                firstname: e.target.value
                            })
                        }} />
                        <input name='lastname' type='text' value={this.state.lastname} onChange={(e) => {
                            this.setState({
                                lastname: e.target.value
                            })
                        }} />

                    </div>
                    <div className='f-profile-email'>{user.id ? user.email : null} </div>
                    <div className='f-profile-employee-id'>{user.id ? user.employeeid : null} </div>
                    <div className='f-profile-allowancebalance'>{user.id ? user.allowancebalance : null} </div>
                    <div className='f-profile-pointbalance'>{user.id ? user.pointbalance : null} </div>
                    <div className='f-profile-userrole'>{user.id ? user.userrole : null} </div>
                    <div className='BIO-Label'> Bio: </div>
                    <div className='f-profile-bio'>{user.id ? user.bio : null} </div>
                </div>
                {this.state.saved === '' ? <button className='update-user-button' onClick={this.updateUser}>Update User!</button> : this.state.saved}
                
                {fireRedirect && (
                    <Redirect to={from || '/profile'} />
                )}
            </div>



        );
    };
};

function mapStateToProps(state) {
    // console.log('user state from edit employee: ', state)
    return {
        user: state.user
    };

}


export default connect(mapStateToProps, { getUserInfo })(EditProfile);