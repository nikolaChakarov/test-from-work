import React from "react";
import { Link } from "react-router-dom";
import "./DiffNumberCols.scss";

import { ReactComponent as Loader } from "../../img/loader.svg";

const db = [
	{
		Accompagnateur: { first_name: "Test name", last_name: "second test name" },
		accompagnateur_id: "2",
		awaiting_accompag_inv: false,
		createdAt: "1636967806202",
		etat_de_publication: null,
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: {
			first_name: "Test name xxxxxxxx",
			last_name: "second test name",
		},
		accompagnateur_id: "",
		awaiting_accompag_inv: false,
		createdAt: "1636967806202",
		etat_de_publication: null,
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: {
			first_name: "Test name",
			last_name: "ssssssssssecond test name",
		},
		accompagnateur_id: "",
		awaiting_accompag_inv: true,
		createdAt: "1636967806202",
		etat_de_publication: "validé",
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: {
			first_name: "Test naadsfdasfdsme",
			last_name: "second tadsfasdfdasfest name",
		},
		accompagnateur_id: "2",
		awaiting_accompag_inv: false,
		createdAt: "1636967806202",
		etat_de_publication: null,
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: { first_name: "Test name", last_name: "second test name" },
		accompagnateur_id: "2",
		awaiting_accompag_inv: false,
		createdAt: "1636967806202",
		etat_de_publication: null,
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: {
			first_name: "Test name xxxxxxxx",
			last_name: "second test name",
		},
		accompagnateur_id: "",
		awaiting_accompag_inv: false,
		createdAt: "1636967806202",
		etat_de_publication: null,
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: {
			first_name: "Test name",
			last_name: "ssssssssssecond test name",
		},
		accompagnateur_id: "",
		awaiting_accompag_inv: true,
		createdAt: "1636967806202",
		etat_de_publication: "validé",
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
	{
		Accompagnateur: {
			first_name: "Test naadsfdasfdsme",
			last_name: "second tadsfasdfdasfest name",
		},
		accompagnateur_id: "2",
		awaiting_accompag_inv: false,
		createdAt: "1636967806202",
		etat_de_publication: null,
		id: 1,
		situation_proprietaire: null,
		status: "accepted",
		user_id: 1,
	},
];

const DiffNumberCols = () => {
	return (
		<div className="container-fluid" id="diff-number-cols">
			<div className="diff-body">
				<ul className="ul-titles">
					<li className="col li-title">ID Dossier</li>
					<li className="col li-title">Accompagnateur</li>
					<li className="col li-title">Date de création</li>
					<li className="col li-title">État de publication</li>
					<li className="col last-li-title li-title">Actions</li>
				</ul>
				<div className="diff-inner">
					<ul className="ul-list">
						{db.map((el, i) => {
							return <Li key={i} el={el} />;
						})}
					</ul>
				</div>
				<h1>diff columns</h1>
			</div>
		</div>
	);
};

const Li = ({ el }) => {
	console.log(el);
	return (
		<li className="li-list">
			<div className="col info-el">{el.id}</div>

			{el.accompagnateur_id && (
				<div className="col info-el">
					{el.Accompagnateur.first_name} {el.Accompagnateur.last_name}
				</div>
			)}

			{!el.accompagnateur_id && !el.awaiting_accompag_inv && (
				<div className="col info-el">
					<Link to="/gestionaccompagnateurs">
						<img
							className="me-md-0 me-3"
							src="/img/calendar/plus.svg"
							alt="cross"
						/>
					</Link>
				</div>
			)}

			{!el.accompagnateur_id && el.awaiting_accompag_inv && (
				<div className="col info-el">
					<Loader />
				</div>
			)}

			<div className="col info-el">
				<span>
					{new Date(parseInt(el.createdAt)).toLocaleString("en-GB", {
						timeZone: "Europe/Paris",
					})}
				</span>
			</div>

			<div className="col info-el">{el.etat_de_publication}</div>

			<div className="col info-el last-info-el">
				<div className="col inner-info-el">
					<img src="/img/svg/checklist.svg" alt="checklist" />
				</div>

				<div className="col inner-info-el pdf-el">
					<img className="me-2" src="/img/svg/pdf-black.svg" alt="pdf" />
					<p>Situation propriétaire</p>
				</div>

				<div className="col inner-info-el">
					<img src="/img/svg/calendar-black.svg" alt="calendar" />
				</div>

				<div className="col inner-info-el">
					<img src="/img/svg/calendar-grey.svg" alt="calendar" />
				</div>
			</div>
		</li>
	);
};

export default DiffNumberCols;
