import React from "react";
import { v4 } from "uuid";
import "./TitleData.scss";

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

const data = new Array(5).fill("");

const TitleData = () => {
	return (
		<div className="container-fluid" id="title-data">
			<div className="row titles">
				{titles.map((el, i) => {
					return (
						<div className="col" key={i}>
							{el}
						</div>
					);
				})}
			</div>

			<div className="row data">
				{data.map((el, i) => {
					return (
						<div className="list-el d-flex">
							{new Array(8).fill("xxx").map((el, i) => {
								return (
									<div className="col" key={i}>
										{el}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TitleData;
