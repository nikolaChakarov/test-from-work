import React from "react";
import "./LayoutInnerScroll2.scss";
import { Link } from "react-router-dom";

const LayoutInnerScroll2 = () => {
	const titles = [
		"Référence Equipe",
		"Nom Equipe",
		"Membre 1",
		"Membre 2",
		"Règles",
		"VIP",
		"Mettre en sommeil",
		"Supprimer",
		"Mandats en cours",
		"Mandats terminés",
	];

	const db = [
		{
			ref: "PA824",
			name: "Paris-Londressssss",
			firstMembre: "Eric Duranzxcvxcvt",
			secondMembre: "Pierre Leduc",
			mandatEnCours: 3,
			mandatFinished: 8,
		},
		{
			ref: "PA824",
			name: "Paris-Londres",
			firstMembre: "c Durant",
			secondMembre: "re Leduc",
			mandatEnCours: 3,
			mandatFinished: 8,
		},
		{
			ref: "PA824",
			name: "Paris-Londres",
			firstMembre: "Eric ",
			secondMembre: "",
			mandatEnCours: 3,
			mandatFinished: 8423423,
		},
		{
			ref: "PA824",
			name: "Pariadsfasdfasdfs-Londres",
			firstMembre: "Eric Durasdfasdfsdfasdfant",
			secondMembre: "Pierre Leduc",
			mandatEnCours: 35345345345345,
			mandatFinished: 8,
		},
	];

	return (
		<div className="container-fluid" id="inner-scroll-2">
			<div className="main">
				<div className="titles-wrapper">
					<ul>
						{titles.map((el, i) => {
							return (
								<li key={i} className="li-title">
									{el}
								</li>
							);
						})}
					</ul>
				</div>

				<div className="elements-wrapper">
					<ul className="li-wrapper">
						{db.map((el, i) => {
							return <Li key={i} data={el} />;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

const Li = ({ data }) => {
	return (
		<li className="li-element">
			<div>{data.ref}</div>
			<div>{data.name}</div>
			<div>{data.firstMembre}</div>
			<div>{data.secondMembre}</div>
			<div>
				<Link to={`/equipe/rules/${data.id}`}>Voir</Link>
			</div>
			<div>
				<Link to={`/equipe/abonner/${data.id}`}>S'abonner</Link>
			</div>
			<div>
				<Link to={`/equipe/sommeil/${data.id}`}>
					<img src="/img/moon.svg" alt="moon icon" />
				</Link>
			</div>
			<div>
				<Link to={`/equipe/sommeil/${data.id}`}>
					<img src="/img/trash-bin.svg" alt="trash bin icon" />
				</Link>
			</div>
			<div>{data.mandatEnCours}</div>
			<div>{data.mandatFinished}</div>
		</li>
	);
};

export default LayoutInnerScroll2;
