import React, { PropTypes } from "react";

import "./CartItem.css";

export default function CartItem( { logo, name, price } ) {
	return (
		<div className="cart-item">
			<div className="cart-item__name-logo-wrapper">
				<img
					alt={ `${ name } logo` }
					className="cart-item__logo"
					src={ logo }
				/>
				<span className="cart-item__name">{ name }</span>
			</div>
			<span className="cart-item__price">${ price }</span>
		</div>
	);
}

CartItem.propTypes = {
	  logo: PropTypes.string.isRequired
	, name: PropTypes.string.isRequired
	, price: PropTypes.number.isRequired
};
