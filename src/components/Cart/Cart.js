import React, { Component } from 'react';
import './Cart.css'
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../ducks/reducer';
import axios from 'axios';
import _ from 'lodash'
// var cartTotal = '';
var itemId = '';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      userid: [],
      giver: '',
      productid: '',
      total: '',
    }
    this.purchaseProduct = this.purchaseProduct.bind(this)
  }

  componentDidMount() {
    this.setState({
      giver: this.props.user.employeeid,
      total: this.props.cart.saleprice
    })
  }

  // cartTotalCalc(){
  //   var key='';
  //   var logo='';
  //   var name = '';
  //   var price = '';
  //   const cart = this.props.cart;
  //   const products = cart.map( product => (
  //     cart.map((item, i) => {
  //         key= product.productid
  //       logo= product.imageurl
  //       name= product.productname
  //       price= product.saleprice 
  //     })

  //   ) );
  //   const cartTotal = cart.reduce( ( total, { price } ) => total + price, 0 );

  // }

  purchaseProduct() {
    const { productid, giver, total } = this.state
    axios.put('/api/transaction', { productid, giver, total }).then(res => {
      this.setState({
        userid: res.data
      })
    })
    this.setState({
      // total: cartTotal,
      productid: itemId
    })
  }

  render() {
    const cart = this.props.cart;
    // console.log('cart state:', this.state)
    // console.log('cartlength:', cart.length)
    // console.log('cartTotal:',cartTotal)
    // cart.length===0? cartTotal=0 :null

    return (
      <div className='Cart-Container'>

        <div className="cart">
          {cart.map((item, i) => {
            return (
              <div className="itemInCart" key={i}>
                <img alt={item.productname} src={item.imageurl} />
                <p>{item.productname}</p>

                <p>ID: {item.productid}</p>
                <p>{item.saleprice} Points</p>

                <div className="removeFroomCart" onClick={() => {
                 //  console.log('removed!')
                  // {cartTotal -= item.saleprice}
                  this.props.removeProductFromCart(i)
                }}>Remove from cart</div>
              </div>
            )
          })}

          {cart.map((item, i) => {
            return (
              <div className="itemInCart" key={i}>
                {item.saleprice}
                {_.sumBy(cart, 'saleprice')}
              </div>
            )
          })}

          {/* TOTAL: {cart.map((item, i) => {
  return(
    <div>
    {item.saleprice}
    {_.sumBy(cart, 'saleprice')}
    </div>
  )}} */}



          {/* {cart.map((item, i) => {
          <div className="itemInCart" key={i}>
          {cartTotal += item.saleprice}
          </div>
        })} */}
          {/* {cartTotal} */}
          <button onClick={this.purchaseProduct}>Confirm Purchase</button>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state from cart', state)
  return {
    cart: state.cart,
    user: state.user
    // cartTotal: state.
  };
}

export default connect(mapStateToProps, { removeProductFromCart })(Cart);