import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setOneProductOnRedux, addProductToCart, getUserInfo } from '../../ducks/reducer';
import './Details.css'
import '../Cart/Cart'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { Redirect } from 'react-router'
// import NotEnoughPoints from '../Alerts/NotEnoughPoints'

class Details extends Component {
    constructor() {
        super();
        this.state = {
            userid: [],
            giver: '',
            productid: '',
            total: '',
            pointbalance: '',
            newTotal: '',
            user: {},
            fireRedirect: false

        }
        this.purchaseProduct = this.purchaseProduct.bind(this)
    }

    componentWillMount() {
        const productID = this.props.match.params.productid;

        axios.get(`/api/product/${productID}`)
            .then(product => {
                this.setState({
                    newTotal: product.data.saleprice,
                })

            })

        this.setState({
            productid: this.props.match.params.productid,
            giver: this.props.user.employeeid,
            total: this.props.product.saleprice,
            pointbalance: this.props.user.pointbalance
        })

        axios.get(`/api/product/${productID}`)
            .then(product => {
                this.props.setOneProductOnRedux(product.data);
            })


    }

    addToCart(product) {
        this.props.addProductToCart(product);
    }

    purchaseProduct() {
        const { productid, giver, newTotal, pointbalance } = this.state
        if (this.state.pointbalance > this.state.newTotal) {
            axios.put('/api/transaction', { productid, giver, newTotal }).then(res => {
                this.props.getUserInfo();
                swal({
                    title: "THANKS!",
                    text: `you successfully purchased ${this.props.product.productname}. Enjoy!`,
                    icon: "success",
                    button: "Sweet!"
                })
                .then(() => {
                    this.setState({ fireRedirect: true });
                  });
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
        const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        const product = this.props.product;
        // const {saleprice, productname, productdescription} = this.props.product;
        // console.log(this.state)
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
                {fireRedirect && (
          <Redirect to={from || '/Shop'}/>
        )}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product,
        cart: state.cart,
        user: state.user,
        user: state.user
    };

}
const mapDispatchToProps = {
    setOneProductOnRedux: setOneProductOnRedux,
    addProductToCart: addProductToCart,
    getUserInfo:getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);