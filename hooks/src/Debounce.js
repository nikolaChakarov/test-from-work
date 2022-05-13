import { useEffect, useState } from "react";
import { fakeNames } from "./data/db";
import useDebounce from "./hooks/debounce";

const Debounce = () => {
	let filteredNames = fakeNames;

	// input value
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	// with no debounce!
	// if (query !== "") {
	// 	filteredNames = filteredNames.filter((el) =>
	// 		el.toLowerCase().includes(query.toLowerCase())
	// 	);
	// }

	const onInputChange = (e) => {
		setQuery(e.target.value);
	};

	const debouncedInputValue = useDebounce(query, 500);

	useEffect(() => {
		if (debouncedInputValue) {
			console.log(debouncedInputValue);

			setResults((prev) => [
				...filteredNames.filter((el) =>
					el.toLowerCase().includes(query.toLowerCase())
				),
			]);
		} else {
			setResults([...filteredNames]);
		}
	}, [debouncedInputValue]);

	return (
		<div>
			<h1>Debounce</h1>
			<hr
				style={{
					margin: "20px 0",
				}}
			/>

			<input type="text" onChange={onInputChange} />

			{/* with no debounce */}
			{/* {filteredNames.map((el, i) => (
				<div key={i}>{el}</div>
			))}

			<div>{filteredNames.length === 0 && query !== "" && "No matches..."}</div> */}

			{results.map((el, i) => (
				<div key={i}>{el}</div>
			))}

			<div>{results.length === 0 && query !== "" && "No matches..."}</div>
		</div>
	);
};

export default Debounce;
