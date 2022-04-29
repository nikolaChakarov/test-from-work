import { useSelector } from "react-redux";

import React from "react";

const Navbar = () => {
	const { amount } = useSelector((store) => store.cart);

	console.log(amount, " this is the amount from our state");

	return (
		<div className="nav-center">
			<h3>Redux Toolkit</h3>

			<div className="nav-container">
				<div className="amount-container">
					<p className="total-amount">{amount}</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
