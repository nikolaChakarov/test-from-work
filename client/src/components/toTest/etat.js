import React, { useState, useEffect } from "react";
import styles from "./Etat.module.css";

const Etat = ({ text, clickHandler, serialize, values, manuallySetValues }) => {
	const conditions = [
		"Neuf",
		"Travaux à terminer",
		"Entièrement rénové",
		"Globalement rénové",
		"En partie rénové",
		"À rafraîchir",
		"À rénover",
		"À entièrement rénover",
	];

	const types = [
		"Appartement",
		"Maison de ville",
		"Loft/ Atelier",
		"Penthouse",
		"Villa",
		"Chalet",
		"Résidence chalet",
		"Immeuble",
		"Propriété",
		"Hôtel particulier",
		"Château",
		"Ferme",
		"Péniche",
		"Terrain",
		"Maison de Lotissement en copropriété",
	];

	const [opacity, setOpacity] = useState(false);

	useEffect(() => {
		setOpacity(!opacity);
	}, []);

	const addEtatHandler = (e, arr, el) => {
		e.stopPropagation();
		// console.log(el);
		clickHandler(arr, serialize(el), el);
	};

	return (
		<div className={styles.etatMain} style={{ opacity: opacity ? "1" : "0" }}>
			<div className={styles.transparent}></div>

			<div className={styles.background}>
				<div className={styles.typeArrow}>
					<p>{text}</p>
					<img src="/img/down-arrow.svg" alt="arrow" />
				</div>
				<h3>État du bien</h3>

				<ul className={styles.conditions}>
					{conditions.map((el, i) => {
						return (
							<li key={i} onClick={(e) => addEtatHandler(e, "etat", el)}>
								{el}
							</li>
						);
					})}
				</ul>

				<h3>Type de bien</h3>

				<div className={styles.btnGroup}>
					{types.map((el, i) => {
						return (
							<div
								key={i}
								className={styles.btnSet}
								onClick={(e) => addEtatHandler(e, "type_de_bien", el)}
							>
								<p className={styles.btnCircle}>+</p>
								<p className={styles.btnText}>{el}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Etat;
