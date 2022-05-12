import { useEffect, useState, useMemo, useCallback } from "react";
import { fakeNames } from "./data/db";

const Debounce = () => {
	const [query, setQuery] = useState("");

	let filteredNames = fakeNames;

	if (query !== "") {
		filteredNames = filteredNames.filter((el) =>
			el.toLowerCase().includes(query.toLowerCase())
		);
	}

	const changeHandler = (e) => {
		console.log(e.target);
		setQuery(e.target.value);
	};

	const debounceFunc = (func, delay) => {
		let intervalID;

		return function () {
			console.log(this);
			const self = this;
			const args = arguments;

			clearInterval(intervalID);

			intervalID = setInterval(() => {
				func.apply(self, args);
			}, delay);
		};
	};

	const deb = useCallback(() => {
		debounceFunc(changeHandler, 1000);
	}, [query]);

	return (
		<div>
			<h1>Debounce</h1>
			<hr
				style={{
					margin: "20px 0",
				}}
			/>

			<input type="text" onChange={deb} value={query} />

			{filteredNames.map((el, i) => (
				<div key={i}>{el}</div>
			))}

			<div>{filteredNames.length === 0 && query !== "" && "No matches..."}</div>
		</div>
	);
};

export default Debounce;
