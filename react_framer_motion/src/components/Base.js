import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const Base = () => {
	const { pizza, addBase } = useContext(GlobalContext);
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<div className="base container">
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<li key={base} onClick={() => addBase(base)}>
							<span className={spanClass}>{base}</span>
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
