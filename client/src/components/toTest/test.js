import React, { useState } from "react";
import Etat from "./MenuElements/Etat/Etat";
import Lieu from "./MenuElements/Lieu/Lieu";
import Budget from "./MenuElements/Budget/Budget";
import Surface from "./MenuElements/Surface/Surface";
import Pieces from "./MenuElements/Pieces/Pieces";

import MenuAside from "./MenuAside/MenuAside";
import AnnoncesInfo from "./AnnoncesInfo/AnnoncesInfo";
import CarouselAnnonces from "./CarouselAnnonces/CarouselAnnonces";

import styles from "./index.module.css";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_LISTINGS } from "../../../../utils/graphql/queries/listings";
import { useForm } from "../../../../utils/hooks";

const Annonces = () => {
	//const menu = ['Que recherchez-vous ?', 'Lieu', 'Budget', 'Surface', 'Pièces'];
	const [dropdownName, setDropdownName] = useState("");
	const [bellClick, setBellClick] = useState(false);
	const [fullState, setFullState] = useState();

	const { onChange, onSubmit, values } = useForm(submitForm, {
		//Got these as empty strings instead of numbers so they don't show in the input fields. We're converting them in the backend
		surface_habitable_min: "",
		surface_habitable_max: "",

		surface_du_terrain_min: "",
		surface_du_terrain_max: "",

		budget_min: "",
		budget_max: "",

		lieu: "",
	});

	function submitForm() {}

	const [selectedTexts, setSelectedTexts] = useState({
		etat: [],
		type_de_bien: [],
		lieu: [],
		budget: [],
		surface: [],
		pieces: [],
	});

	const [localValues, setLocalValues] = useState({
		etat: [],
		type_de_bien: [],
		//Since we only care about individual fields we can just put them into one array probably
		features: [],
	});

	const [searchListings, { loading, error, data }] = useLazyQuery(
		SEARCH_LISTINGS,
		{
			onError: (err) => {
				console.log(err);
			},
			onCompleted: (data) => {
				console.log(data, " listings");
			},
		}
	);

	const setSelectedValue = (array, value, fullName, e) => {
		console.log(array, value);
		let oldState = { ...localValues };
		if (localValues[array] && !localValues[array].includes(value)) {
			if (oldState[array].length === 0) {
				oldState[array] = [value];
			} else {
				oldState[array].push(value);
			}
			//These btns don't have a selected text area, so skip
			if (array !== "features") {
				toggleSelectedText(array, fullName, true);
			}
		} else {
			//In case its already in there, remove it
			const idx = oldState[array].indexOf(value);
			if (idx > -1) {
				oldState[array].splice(idx, 1);
				//These btns don't have a selected text area, so skip
				if (array !== "features") {
					toggleSelectedText(array, fullName, false);
				}
			}
		}
		setLocalValues(oldState);
		//Sending oldState because values aren't updated on the first go (for some reason, probably has to do with the react lifecycle)
		// const joinedState = Object.assign(values, oldState);
		// console.log(joinedState, ' JOINED STATE');
		// setFullState(joinedState);

		// searchListings({ variables: { input: joinedState } });
	};

	//This displays the selected values under the dropdowns
	const toggleSelectedText = (array, value, addToArray) => {
		let oldState = { ...selectedTexts };
		console.log(oldState, " OLDSTATE");
		if (addToArray) {
			oldState[array].push(value);
		} else {
			const idx = oldState[array].indexOf(value);
			if (idx > -1) {
				oldState[array].splice(idx, 1);
			}
		}
		setSelectedTexts(oldState);
	};

	// TODO read from database...
	const db = [
		{
			type: "Appartement",
			size: "5 pièces - 150 m2",
			ref: "Réf. 00001",
			infoPrice: "15ème arrondissement, Dupleix 1 150 000 €",
			infoConditions:
				"3 chambres - surface habitable de 150 m2 - Terrasse - Balcon",
		},
	];
	const serialize = (str) => {
		const regex = /[a-zA-Z0-9]+/g;

		const clear = str.match(regex);
		const res = clear.reduce((acc, curr) => {
			acc += curr;
			return acc.toLowerCase();
		}, "");

		return res;
	};

	const menuItemsArr = [
		{
			type: "etat",
			click: false,
			text: "Que recherchez-vous ?",
			// component: <Etat text="Que recherchez-vous ?" serialize={serialize} clickHandler={setSelectedValue} />,
			component: Etat,
			props: {
				text: "Que recherchez-vous ?",
				serialize: serialize,
				clickHandler: setSelectedValue,
			},
		},
		{
			type: "lieu",
			click: false,
			text: "Lieu",
			component: Lieu,
			props: {
				text: "Lieu",
				serialize: serialize,
				clickHandler: setSelectedValue,
				onChange,
				values,
			},
		},
		{
			type: "budget",
			click: false,
			text: "Budget",
			component: Budget,
			props: {
				text: "Budget",
				serialize: serialize,
				clickHandler: setSelectedValue,
				onChange,
				values,
			},
		},
		{
			type: "surface",
			click: false,
			text: "Surface",
			component: Surface,
			props: {
				text: "Surface",
				serialize: serialize,
				clickHandler: setSelectedValue,
				onChange,
				values,
			},
		},
		{
			type: "pieces",
			click: false,
			text: "Pièces",
			component: Pieces,
			props: {
				text: "Pieces",
				serialize: serialize,
				clickHandler: setSelectedValue,
				onChange,
			},
		},
	];

	const onMenuClickHandler = (type) => {
		setDropdownName(type);
		//If we're clicking on the same menu, close it
		if (dropdownName === type) {
			setDropdownName("");
		} else {
			setDropdownName(type);
		}
	};
	return (
		<div className={styles.mainAnnonces}>
			<div className={styles.annoncesMenuBellSet}>
				<ul className={styles.annoncesMenu}>
					{menuItemsArr.map(({ type, text, component, props }, index) => {
						return (
							<li key={index} onClick={() => onMenuClickHandler(type)}>
								<p>{text}</p>
								<img src="/img/down-arrow.svg" alt="arrow" />
								{dropdownName === type &&
									React.createElement(component, props, null)}
							</li>
						);
					})}
				</ul>

				<button
					onClick={() =>
						searchListings({
							variables: { input: localValues, stringInput: values },
						})
					}
				>
					Search
				</button>

				<div className={styles.bellSet}>
					<div
						className={styles.bellClickInputShow}
						style={{
							display: bellClick ? "flex" : "none",
							pointerEvents: "all",
						}}
					>
						<input
							type="text"
							placeholder="Veuillez saisir le nom de vos favoris"
						/>
					</div>
					<div
						className={
							bellClick
								? `${styles.bellIconContainerNoHoverBack}`
								: `${styles.bellIconContainer}`
						}
						onClick={() => setBellClick(!bellClick)}
						style={{
							filter: bellClick
								? "invert(100%) sepia(92%) saturate(31%) hue-rotate(73deg) brightness(107%) contrast(107%)"
								: "none",
						}}
					>
						<img src="/img/bell_icon.svg" alt="bell icon" />
					</div>
				</div>
			</div>
			<div className={styles.annoncesSelected}>
				{Object.keys(selectedTexts).map((key, index) => (
					<div key={index}>
						{selectedTexts[key].map((val, idx) => {
							return <span key={idx}>{val}</span>;
						})}
					</div>
				))}
			</div>

			<div className={styles.annoncesBody}>
				<div className={styles.annoncesBodyLeft}>
					<MenuAside
						features={localValues.features}
						serialize={serialize}
						clickHandler={setSelectedValue}
					/>
				</div>
				<div className={styles.annoncesBodyMain}>
					<div className={styles.annoncesCarousel}>
						<CarouselAnnonces />
					</div>
					<div className={styles.annoncesInfo}>
						<AnnoncesInfo currentApartment={{ ...db[0] }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Annonces;
