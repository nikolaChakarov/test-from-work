import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const Toppings = () => {
	const { pizza, addTopping, removeTopping, addOrder, dispatch } =
		useContext(GlobalContext);
	const [spanClass, setSpanClass] = useState({});

	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	const toggleTopping = (el) => {
		const currentTopping = el.currentTarget.dataset.name;

		if (!pizza.toppings.includes(currentTopping)) {
			addTopping(currentTopping);
			setSpanClass((prev) => ({ ...prev, [currentTopping]: "active" }));
		} else {
			removeTopping(currentTopping);
			setSpanClass((prev) => ({ ...prev, [currentTopping]: "" }));
		}
	};

	useEffect(() => {
		dispatch({
			type: "REMOVE_TOPPINGS",
		});
	}, []);

	return (
		<div className="toppings container">
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					return (
						<li key={topping} onClick={toggleTopping} data-name={topping}>
							<span className={`${spanClass[topping] ? "active" : ""}`}>
								{topping}
							</span>
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
