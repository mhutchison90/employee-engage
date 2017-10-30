import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setOneProductOnRedux, addProductToCart } from '../../ducks/reducer';
import './Details.css'
import '../Cart/Cart'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
// import NotEnoughPoints from '../Alerts/NotEnoughPoints'

class Details extends Component {
    constructor() {
        super();
        this.state = {
            userid: [],
            giver: '',
            productid: '',
            total: '',
            pointbalance: ''
        }
        this.purchaseProduct = this.purchaseProduct.bind(this)
    }

    componentWillMount() {
        const productID = this.props.match.params.productid;
        // console.log(productID)
        // this.props.match stores params
        // the variable productid was declared in Route path in App.js
        // the action value stored on productid is assigned in Link in Shop.js when you click
        this.setState({
            productid: this.props.match.params.productid,
            giver: this.props.user.employeeid,
            total: this.props.product.saleprice,
            pointbalance: this.props.user.pointbalance
        })
        console.log('this.state', this.state)

        axios.get(`/api/product/${productID}`)
            .then(product => {
                this.props.setOneProductOnRedux(product.data);
            })


    }

    addToCart(product) {
        this.props.addProductToCart(product);
    }

    purchaseProduct() {
        console.log('this.state', this.state)
        // this.setState({
        //     productid: this.props.match.params.productid,
        //     giver: this.props.user.employeeid,
        //     total: this.props.product.saleprice,
        //     pointbalance: this.props.user.pointbalance
        // })

        const { productid, giver, total, pointbalance } = this.state
        if (this.state.pointbalance > this.state.total) {
            axios.put('/api/transaction', { productid, giver, total }).then(res => {
            })
        } else {
            swal({
                title: "oops!",
                text: "Your point ballance is too low to purchase this item.",
                icon: "error",
            });
        }
    }

    render() {
        const product = this.props.product;
        // const {saleprice, productname, productdescription} = this.props.product;
        console.log(this.state)
        // console.log('product', product)
        return (
            <div className="Details-Body-Container">
                <div className='Product-Info-Container'>
                    <div className='details-product-productname'>{product.productname}</div>
                    <div className='details-product-image'><img className='details-product-image-style' alt={product.productname} src={product.imageurl} /></div>
                    <div className='details-product-productdescription'>{product.productdescription}</div>
                    <div className='details-product-purchase-info'>
                        <div className='details-product-saleprice'>Price: {product.saleprice} points</div>
                        <div className="addToCart" onClick={this.purchaseProduct}>Purchase</div>
                    </div>
                    <Link className='details-go-back-to-shop' to="/shop"><div>Go back to the shop</div></Link>

                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product,
        cart: state.cart,
        user: state.user
    };

}
const mapDispatchToProps = {
    setOneProductOnRedux: setOneProductOnRedux,
    addProductToCart: addProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps )(Details);