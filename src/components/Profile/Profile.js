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
            transactions: []
        }
    }

    componentDidMount() {
        this.props.getUserInfo();
        axios.get('/api/user/transactions/' + this.props.user.employeeid).then(res => {
            this.setState({
                transactions: res.data
            })
        })
    }

    render() {
        transactionArr=this.state.transactions;
        // console.log('TransactionArr: ',transactionArr)
        const user = this.props.user;
        console.log(this.state.transactions)
        return (
            <div className=''>

                <h3>{user.id ? user.user_name + "'s Profile" : null}</h3>

                {user.id ? <img className='avatar' src={user.img} alt='' /> : null}
                <p>Username: {user.id ? user.user_name : null}</p>
                <p>Email: {user.id ? user.email : null} </p>
                <p>Auth ID: {user.id ? user.auth_id : null} </p>
                <p>EmployeeID: {user.id ? user.employeeid : null} </p>
                <p>allowancebalance: {user.id ? user.allowancebalance : null} </p>
                <p>pointbalance: {user.id ? user.pointbalance : null} </p>
                <p>userrole: {user.id ? user.userrole : null} </p>


                <div className="Transaction-History-Container">
                    {this.state.transactions.map((product, i) => {
                        // map through products here to display all
                        return (
                            <div key={i} className="Purchase-History-Container">

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
                                <div className='purchase-history-orderdate'>
                                    {product.orderdate}
                                </div>

                            </div>
                        )
                    })}
                </div>






                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from Profile", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);
