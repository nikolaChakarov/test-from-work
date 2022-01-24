import { useState, useEffect } from "react";
import "./BttnArrowRepeat.scss";

const BttnArrowRepeat = () => {
	const [currentFilter, setCurrentFilter] = useState("First");
	const [click, setClick] = useState(false);

	const toggleFilters = (e) => {
		const currentChoosenFilter = e.target.dataset.name;
		setCurrentFilter(currentChoosenFilter);

		setClick(!click);
	};

	return (
		<div className="container-fluid" id="bttn-arrow-repeat">
			<div className="bttn-wrapper" onClick={() => setClick(!click)}>
				<div className="bttn-inner-div">
					<p className="p-filter">{currentFilter}</p>
					<img
						src="/img/arrow-down.svg"
						alt="arrow icon"
						style={{
							transform: click ? "rotate(180deg)" : "",
						}}
					/>
				</div>

				{click ? (
					<FiltersList
						currentFilter={currentFilter}
						click={click}
						setClick={setClick}
						toggleFilters={toggleFilters}
					/>
				) : null}
			</div>
		</div>
	);
};

const FiltersList = ({ currentFilter, click, setClick, toggleFilters }) => {
	const filters = ["First", "Second", "Third"];
	const [list, setList] = useState([]);

	useEffect(() => {
		setList((prev) => {
			let temp = filters.filter((el) => el !== currentFilter);
			return [...temp];
		});
	}, []);

	return (
		<div className="filters-list">
			{list.map((el, i) => {
				return (
					<p key={i} data-name={el} onClick={toggleFilters}>
						{el}
					</p>
				);
			})}
		</div>
	);
};

export default BttnArrowRepeat;
