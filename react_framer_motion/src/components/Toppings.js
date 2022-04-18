import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const Toppings = () => {
	const { pizza, addTopping, addOrder } = useContext(GlobalContext);

	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	return (
		<div className="toppings container">
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<li key={topping} onClick={() => addTopping(topping)}>
							<span className={spanClass}>{topping}</span>
						</li>
					);
				})}
			</ul>

			<Link to="/order">
				<button onClick={() => addOrder(pizza)}>Order</button>
			</Link>
		</div>
	);
};

export default Toppings;
