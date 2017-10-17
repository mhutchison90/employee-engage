import React from "react";
import { connect } from "react-redux";

import "./Cart.css";

import { checkout } from "../../ducks/product";

import CartItem from "./CartItem/CartItem";

export function Cart( { checkout, history, productsInCart } ) {
	const products = productsInCart.map( product => (
		<CartItem
			key={ product.id }
			logo={ product.logo }
			name={ product.name }
			price={ product.price }
		/>
	) );

	const cartTotal = productsInCart.reduce( ( total, { price } ) => total + price, 0 );

	function checkoutAndRedirect() {
		checkout();
		history.push( "/thank-you" );
	}

	return (
		<div className="cart">
			<h1>Cart</h1>
			{
				products.length === 0
					?
						<h3>Nothing in cart! Go buy something!</h3>
					:
						<main>
							{ products }
							<div className="cart__total">
								${ cartTotal }
							</div>
							<button
								className="cart__checkout"
								onClick={ checkoutAndRedirect }
							>
								Checkout
							</button>
						</main>
			}
		</div>
	);
}

function mapStateToProps( { products, productsInCart } ) {
	return { productsInCart: products.filter( product => productsInCart.includes( product.id ) ) }
}

export default connect( mapStateToProps, { checkout } )( Cart );
