import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash';

var transactionArr = [];

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            transactions: [],
            pointHistory: [],
            showPointHistory: true,
            showPurchaseHistory: true
        }
    }

    componentDidMount() {
        this.toggle_showPointHistory('Point-History-Container')
        this.toggle_showPurchaseHistory('Purchase-History-Container')
        this.props.getUserInfo();
        axios.get('/api/user/transactions/' + this.props.user.employeeid).then(res => {
            console.log('MJH employeeid', this.props.user.employeeid)
            this.setState({
                transactions: res.data
            })
        })
        axios.get('/api/users/pointhistory/' + this.props.user.employeeid).then(res => {
            this.setState({
                pointHistory: res.data
            })
        })
    }

    toggle_showPointHistory(element_id) {
        var element = document.getElementById(element_id);
        // element.style.display = (element.style.display != 'none' ? 'none' : 'block');
        if (this.state.showPointHistory === false) {
            element.style.display = (element.style.display = 'block');
            this.setState({
                showPointHistory: true
            })
        } else {
            element.style.display = (element.style.display = 'none');
            this.setState({
                showPointHistory: false
            })
        }
    }

    toggle_showPurchaseHistory(element_id) {
        var element = document.getElementById(element_id);
        // element.style.display = (element.style.display != 'none' ? 'none' : 'block');
        if (this.state.showPurchaseHistory === false) {
            element.style.display = (element.style.display = 'block');
            this.setState({
                showPurchaseHistory: true
            })
        } else {
            element.style.display = (element.style.display = 'none');
            this.setState({
                showPurchaseHistory: false
            })
        }
    }

    render() {
        transactionArr = this.state.transactions;
        // console.log('TransactionArr: ',transactionArr)
        const user = this.props.user;

        return (
            <div className='Profile-Body-Container'>
                <div className='edit-profile-container' >
                    <Link className='edit-profile-button' to={'/editprofile/' + user.employeeid}>EDIT PROFILE</Link>
                </div>
                    <div className='profile-header'>
                        <div className='user-name-header'>{user.id ? user.viewname + "'s Profile" : null}</div>
                        {/* <div className='profile-image'><img className='profile-picture' src={user.img} alt='' /></div> */}
                </div>


                {/* <div className='profile-user-info'>
                    <div className='profile-user-name'><p>Username: {user.id ? user.user_name : null}</p></div>
                    <div className='profile-email'><p>Email: {user.id ? user.email : null} </p></div>
                    <div className='profile-authid'><p>Auth ID: {user.id ? user.auth_id : null} </p></div>
                    <div className='profile-employee-id'><p>EmployeeID: {user.id ? user.employeeid : null} </p></div>
                    <div className='profile-allowancebalance'><p>allowancebalance: {user.id ? user.allowancebalance : null} </p></div>
                    <div className='profile-pointbalance'><p>pointbalance: {user.id ? user.pointbalance : null} </p></div>
                    <div className='profile-userrole'><p>userrole: {user.id ? user.userrole : null} </p></div>
                    <Link className='edit-profile-button' to={'/editprofile/' + user.employeeid}>EDIT PROFILE</Link>
                </div> */}
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



                <div className="Transaction-History-Container">

                    <div className='toggle_PointHistory' onClick={_ => { this.toggle_showPointHistory('Point-History-Container') }}>Show My Recent Recognition</div>

                    <div className='Point-History-Drop-Down-Container'>
                        <div id="Point-History-Container">
                            <div className='History-Container'>
                                <div className='history-content'>

                                    {this.state.pointHistory.length ?
                                        <div className={`point-history-item`}>
                                            <div className='point-history-giver'>
                                                From
                                        </div>
                                            <div className='point-history-reciever'>
                                                To
                                        </div>
                                            <div className='point-history-total'>
                                                Amount
                                        </div>
                                        </div> : 'No history to show at this time.'}

                                    {this.state.pointHistory.map((points, i) => {
                                        return (
                                            <div key={i} className={i % 2 ? `point-history-item-odd` : `point-history-item-even`}>
                                                <div className='point-history-giver'>
                                                    {points.sender}
                                                </div>
                                                <div className='point-history-reciever'>
                                                    You
                                        </div>
                                                <div className='point-history-total'>
                                                    {points.total}
                                                </div>
                                                {/* <div className='point-history-timestamp'>
                                        {points.timestamp}
                                    </div> */}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='toggle_PurchaseHistory' onClick={_ => { this.toggle_showPurchaseHistory('Purchase-History-Container') }}>Show My Recent Purchases</div>
                    <div id="Purchase-History-Container">
                        <div className='History-Container'>
                            <div className='history-content'>
                                {this.state.transactions.length ? null : 'No history to show at this time.'}
                                {this.state.transactions.map((product, i) => {
                                    // map through products here to display all
                                    return (
                                        <div key={i} className={`purchase-history-item${i}`}>
                                            <Link to={`/details/${product.productid}`} >
                                                <img className='purchase-history-image' src={product.imageurl} alt={product.productname} />
                                            </Link>
                                            <div className='purchase-history-productname'>
                                                {product.productname}
                                            </div>
                                            <div className='purchase-history-productdescription'>
                                                {product.productdescription}
                                            </div>
                                            <div className='purchase-history-saleprice'>
                                                {product.saleprice}
                                            </div>
                                            {/* <div className='purchase-history-orderdate'>
                                        {product.orderdate}
                                    </div> */}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("state from Profile", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);
