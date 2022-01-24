import React from "react";
import { v4 } from "uuid";
import "./LayoutScroll.scss";

const mandats = [
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
	{
		id: v4(),
		ref: "A0001",
		date: "11/01/2021",
		mandataire: "Charles Matthieu",
		proprietaire: "Jean Michel",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "05/04/2021",
	},
	{
		id: v4(),
		ref: "A000adsfasdf1",
		date: "11/01/2021",
		mandataire: "Charles Matthieudsfasfasdfasf",
		proprietaire: "Jean Micheadsfadfadsfasdfl",
		lastDate: "11/04/2021",
		compromisDate: "05/04/2021",
		selDate: "",
	},
];

const liTitles = [
	"Numéro d’annonce",
	"Date d’acquisition",
	"Mandataire",
	"Propriétaire",
	"Date fin de mandat",
	"Date de compromis",
	"Date de vente",
];

const LayoutScroll = () => {
	return (
		<div className="container-fluid" id="layout-scroll">
			<h1>Title</h1>

			<div className="row-body">
				<div className="inner">
					{/* titles */}
					<ul className="ul-titles">
						{liTitles.map((t, i) => {
							return (
								<li className="col li-title" key={i}>
									{t}
								</li>
							);
						})}
					</ul>

					{/* elements */}
					<ul className="ul-list">
						{mandats.map((mandat, i) => {
							const keys = Object.keys(mandat).filter((el) => el !== "id");

							return (
								<li className="li-element" key={i}>
									{keys.map((k, i) => {
										return (
											<div className="element col" key={i}>
												{mandat[k]}
											</div>
										);
									})}
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<h2>pagination...</h2>

			<div className="bttn-set">
				<button>buton 1</button>
				<button>buton 2</button>
			</div>
		</div>
	);
};

export default LayoutScroll;
