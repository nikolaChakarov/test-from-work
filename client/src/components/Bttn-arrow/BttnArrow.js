import React, { useState } from "react";
import "./BttnArrow.scss";

const BttnArrow = () => {
	const [currentFilter, setCurrentFilter] = useState("Tous");
	const [showFilters, setShowFilters] = useState(false);

	const changeFilter = (e) => {
		const current = e.target.dataset.name;
		setCurrentFilter(current);
		setShowFilters(!showFilters);
	};

	return (
		<div className="container-fluid">
			{/*------------------- Filters button DESKTOP-------------------*/}
			<div className="d-flex justify-content-between filters-bttn">
				<p className="p-current-filter">{currentFilter}</p>
				<img
					className="img-fluid filters-arrow"
					src="/img/arrow-down.svg"
					alt="arrow icon"
					onClick={() => setShowFilters(!showFilters)}
					style={{
						transform: showFilters ? "rotate(180deg)" : "",
					}}
				/>

				{showFilters ? (
					<Filters changeFilter={changeFilter} currentFilter={currentFilter} />
				) : null}
			</div>
			{/*------------------- end Filters button Desktop-------------------*/}

			<h1>Title</h1>
		</div>
	);
};

const Filters = ({ changeFilter, currentFilter }) => {
	/* we allways have a sorted data and selected filter on top on both state of the button */
	let filters = ((current) => {
		let data = ["Tous", "Reçu", "Envoyé"];
		let temp = data.filter((el) => el !== current);
		temp.unshift(currentFilter);

		return temp;
	})(currentFilter);

	return (
		<div className="filters-list">
			{filters.map((el, i) => {
				return (
					<p className="p-filter" key={i} data-name={el} onClick={changeFilter}>
						{el}
					</p>
				);
			})}
		</div>
	);
};

export default BttnArrow;
