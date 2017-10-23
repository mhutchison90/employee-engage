import React, { Component } from 'react';
import './Cart.css'
import { connect } from 'react-redux';
import {removeProductFromCart} from '../../ducks/reducer'

class Cart extends Component {

 
  render() {
    console.log(this.props.cart)
    const cart = this.props.cart;
    var cartTotal = 0;

    return (
      <div className="cart">
        {cart.map((item, i) => {
          return (
            <div className="itemInCart" key={i}>
              <img alt={item.productname} src={item.imageurl} />
              <p>{item.productname}</p>
              <p>${item.saleprice}</p>
              <div className="removeFromCart" onClick={() => this.props.removeProductFromCart(i)}>Remove from cart</div>
            </div>
          )
        })}
        TOTAL:

        {cart.map((item, i) => {
          <div className="itemInCart" key={i}>
            {cartTotal += item.saleprice}
          </div>
        })}
        <div className='cartTotal'>
          {cartTotal}
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps, {removeProductFromCart})(Cart);