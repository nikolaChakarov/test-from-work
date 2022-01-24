import React, { useState } from "react";
import "./Hover.scss";

const listProprio = [
	{
		first: "Vous confiez votre bien à un agent immobilier surmotivé",
		second:
			"L'agent qui paie pour obtenir le mandat de vent de votre bien veut rentabiliser au plus vite son investissement",
	},
	{
		first: "Vous confiez votre bien à un agent qui croit en votre bien",
		second:
			"Persone n'investit de l'argent sans etre confiant en sa capacité à rentabiliser son investissement",
	},
	{
		first: "La valeur de votre bien est estimée par un tiers indépendant",
		second:
			"Sans espoir de rentrer le mandat de bien, le prefessionel estime votre bien sans etre influancé par ses propres intéres",
	},
	{
		first:
			"Vous bénéficiez des conseils d’un professionnel pour maximiser la valeur de votre bien",
		second:
			"Le professionel qui vous accompagne sait comment vous pouvez maximiser la valeur de votre bien",
	},
	{
		first: "Votre bien est mis en valeur de façon professionnelle",
		second:
			"InExclu s'occupe de la présentation digital de votre bien afin de vous assurer d'une présentation professionnelle",
	},
	{
		first:
			"L’assurance de l’acquéreur de votre mandat vous couvre de toute responsabilité",
		second:
			"InExclu s'occupe de la présentation digital de votre bien afin de vous assurer d'une présentation professionnelle",
	},
];

const Hover = () => {
	const [hoverItems, setHoverItems] = useState({});

	const showHiddenEl = (e) => {
		setHoverItems((prev) => {
			let currentEl = e.target.dataset.name;

			const tempObj = { ...prev };
			if (tempObj[currentEl] === undefined) {
				tempObj[currentEl] = true;
				return { ...tempObj };
			}

			return { ...prev, [currentEl]: true };
		});
	};

	const hideHiddenEl = (e) => {
		let currentEl = e.target.dataset.name;

		if (hoverItems[currentEl] === undefined) {
			return;
		}

		setHoverItems({ ...hoverItems, [currentEl]: false });
	};

	return (
		<div className="conatainer-fluid" id="hover-list">
			<div className="row row-cols-md-3 row-cols-1 wrapper">
				{listProprio.map((el, i) => {
					// return <ItemEl key={i} {...el} />;
					return (
						/* col */
						<div key={i} className="col col-wrapper">
							{/* visible part */}
							<div
								className="proprio-item-visible"
								onMouseEnter={showHiddenEl}
								onMouseLeave={hideHiddenEl}
								data-name={el.first}
							>
								<h1>{el.first}</h1>
								{/* hidden part */}
								<div
									className="proprio-item-hidden"
									style={{
										display: hoverItems[el.first] ? "block" : "",
									}}
								>
									{el.second}
								</div>
							</div>

							{/* circle plus -> position abs */}
							<div
								className="circle"
								style={{
									display: hoverItems[el.first] ? "none" : "",
								}}
							>
								+
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

// const ItemEl = ({ first, second }) => {
// 	return (
// 		<div className="proprio-item-wrapper">
// 			<h1>{first}</h1>
// 		</div>
// 	);
// };

export default Hover;
