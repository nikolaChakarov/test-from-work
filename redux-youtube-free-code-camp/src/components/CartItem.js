import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
	const dispatch = useDispatch();

	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">${price}</h4>
				<button
					className="remove-btn"
					onClick={() => {
						dispatch(removeItem(id));
					}}
				>
					remove
				</button>
			</div>

			<div>
				<button className="amoount-btn">UP</button>
				<p className="amount">{amount}</p>
				<button className="amoount-btn">DOWN</button>
			</div>
		</article>
	);
};

export default CartItem;
