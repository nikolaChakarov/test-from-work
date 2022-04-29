import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { GlobalContext } from "../context/GlobalState";

const Toppings = () => {
	const { pizza, addTopping, removeTopping, addOrder, dispatch } =
		useContext(GlobalContext);
	const [spanClass, setSpanClass] = useState({});
	const navigate = useNavigate();

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
						<motion.li
							key={topping}
							onClick={toggleTopping}
							data-name={topping}
							whileHover={{
								scale: 1.3,
								originX: 0,
								color: "#f8e112",
							}}
							transition={{
								type: "spring",
								stiffness: 300,
							}}
						>
							<span className={`${spanClass[topping] ? "active" : ""}`}>
								{topping}
							</span>
						</motion.li>
					);
				})}
			</ul>

			<div
				className="bttns-wrapper"
				style={{
					display: "flex",
				}}
			>
				<Link
					to="/order"
					style={{
						marginRight: "20px",
					}}
				>
					<motion.button
						whileHover={{
							scale: 1.1,
							textShadow: "0px 0px 8px rgb(255, 255, 255)",
							boxShadow: "0px 0px 8px rgb(255, 255, 255)",
						}}
						onClick={() => addOrder(pizza)}
					>
						Order
					</motion.button>
				</Link>
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: "0px 0px 8px rgb(255, 255, 255)",
						boxShadow: "0px 0px 8px rgb(255, 255, 255)",
					}}
					onClick={() => navigate("/base")}
				>
					Go Back
				</motion.button>
			</div>
		</div>
	);
};

export default Toppings;
