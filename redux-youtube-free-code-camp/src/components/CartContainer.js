import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const CartContainer = () => {
	const { cartItems, amount, total } = useSelector((store) => store.cart);

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is current empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			<header>
				<h3>your bag</h3>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
			</footer>
		</section>
	);
};

export default CartContainer;
