import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const Base = () => {
	const { pizza, addBase } = useContext(GlobalContext);
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
	const [spanClass, setSpanClass] = useState({});

	const handleBaseClick = (e) => {
		const currentPizzaBase = e.currentTarget.dataset.name;

		addBase(currentPizzaBase);

		setSpanClass({ [currentPizzaBase]: true });
	};

	return (
		<div className="base container">
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					return (
						<li key={base} onClick={handleBaseClick} data-name={base}>
							<span className={`${spanClass[base] ? "active" : ""}`}>
								{base}
							</span>
						</li>
					);
				})}
			</ul>

			{pizza.base && (
				<div className="next">
					<Link to="/toppings">
						<button>Next</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Base;
