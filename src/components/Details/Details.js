import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setOneProductOnRedux, addProductToCart } from '../../ducks/reducer';
import './Details.css'
import '../Cart/Cart'
import { Link } from 'react-router-dom'


class Details extends Component {

    componentWillMount() {
        const productID = this.props.match.params.productid;
        // console.log(productID)
        // this.props.match stores params
        // the variable productid was declared in Route path in App.js
        // the action value stored on productid is assigned in Link in Shop.js when you click

        axios.get(`/api/product/${productID}`)
            .then(product => {
                this.props.setOneProductOnRedux(product.data);
            });
    }

    addToCart(product) {
        this.props.addProductToCart(product);
    }

    render() {
        const product = this.props.product;
        // console.log('product', product)
        return (
            <div className="product">
                <Link to="/cart"><div>CART: ({this.props.cart.length} items)</div></Link>
                <img alt={product.productname} src={product.imageurl} />
                <p>{product.productname}</p>
                <p>{product.saleprice} Points</p>
                <div className="addToCart" onClick={() => this.addToCart(product)}>Add to cart</div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { 
        product: state.product,
        cart: state.cart
     };

   }
const mapDispatchToProps = {
    setOneProductOnRedux: setOneProductOnRedux,
    addProductToCart: addProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);