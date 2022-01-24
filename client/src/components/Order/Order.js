import { useState } from "react";
import "./Order.scss";

const Order = () => {
	const [filter, setFilter] = useState("all filters");
	const [showFilters, setShowFilters] = useState(false);
	const filters = ["all filters", "by date", "by name"];

	return (
		<div className="container-fluid d-flex flex-column" id="order">
			{/* same button filter, for mobile order */}
			<div className="mobile-filter order-1 d-md-none">
				<button className="btn last-bttn">filters</button>
			</div>

			<div className="top d-flex order-md-1 order-3">
				<button className="btn first-bttn">one</button>
				<button className="btn middle-bttn">two</button>
				{/* <button className="btn last-bttn d-md-block d-none">filters</button> */}

				{/* filters button */}
				<div
					className="filters-bttn-wrapper ms-auto d-flex flex-column align-items-start"
					style={{
						position: showFilters ? "absolute" : "",
						right: showFilters ? "0" : "",
					}}
				>
					<div className="d-flex">
						<p>{filter}</p>
						<img
							className="img-fluid"
							src="/img/arrow-down.svg"
							alt="arrow icon"
							onClick={() => setShowFilters(!showFilters)}
							style={{
								transform: showFilters ? "rotate(180deg)" : "",
							}}
						/>
					</div>

					{showFilters ? (
						<Filters
							list={filters}
							current={filter}
							setFilter={setFilter}
							setShowFilters={setShowFilters}
						/>
					) : null}
				</div>
			</div>

			<div className="middle order-2">
				<ul>
					{new Array(20).fill("").map((el, i) => {
						return <li key={i}>{`item ${i + 1}`}</li>;
					})}
				</ul>
			</div>

			<div className="container-fluid bottom order-md-3 d-md-block d-none">
				<p>pagination</p>
			</div>
		</div>
	);
};

const Filters = ({ list, current, setFilter, setShowFilters }) => {
	const onFilterClikc = (e) => {
		setFilter(e.target.dataset.name);

		setShowFilters(false);
	};

	return (
		<div className="filters-list">
			{list
				.filter((el) => el !== current)
				.map((el, i) => {
					return (
						<p data-name={el} onClick={onFilterClikc} key={i}>
							{el}
						</p>
					);
				})}
		</div>
	);
};

export default Order;
