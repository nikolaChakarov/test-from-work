import React from "react";
import "./LayoutInnerScroll.scss";

const titles = [
	"Date",
	"Numéro d’annonce",
	"Mandataire",
	"Type d’opération",
	"Documents",
	"Débit",
	"Crédit",
	"Solde",
];

const LayoutInnerScroll = () => {
	return (
		<div className="container-fluid" id="inner-scroll">
			<div className="main">
				<div className="titles-wrapper">
					<ul>
						{titles.map((el, i) => {
							return <li key={i}>{el}</li>;
						})}
					</ul>
				</div>

				<div className="elements-wrapper">
					<ul className="li-wrapper">
						{new Array(20).fill("").map((el, i) => {
							return (
								<li key={i} className="li-element">
									{new Array(50).fill("").map((el, i) => {
										return <p key={i}>{i}</p>;
									})}
								</li>
							);
						})}
					</ul>
				</div>

				<div className="footer-wrapper">
					<h1>Total: 0.00</h1>
				</div>
			</div>
		</div>
	);
};

export default LayoutInnerScroll;
