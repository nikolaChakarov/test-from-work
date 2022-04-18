import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Order = () => {
	const { pizza } = useContext(GlobalContext);
	const navigate = useNavigate();

	return (
		<div className="container order">
			<h2>Thank you for your order :)</h2>
			<p>You ordered a {pizza.base} pizza with:</p>
			{pizza.toppings.map((topping) => (
				<div key={topping}>{topping}</div>
			))}

			<button onClick={() => navigate("/")}>Go Back</button>
		</div>
	);
};

export default Order;
