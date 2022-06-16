import { useEffect, useState, useRef } from "react";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
	// const inputEl = useRef();

	const [search, setSearch] = useState("");
	const [isKeyPressed, setIsKeyPressed] = useState(false);

	const debounced = useDebounce(search, 500);

	const updateValue = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		if (debounced && !isKeyPressed) {
			console.log(debounced);
		}
	}, [debounced]);

	return (
		<div>
			<label htmlFor="search_input">
				<span>Search</span>
				<input
					type="text"
					id="search-input"
					name="search"
					onChange={updateValue}
					onKeyDown={() => setIsKeyPressed(true)}
					onKeyUp={() => setIsKeyPressed(false)}
					value={search}
				/>
			</label>

			<div>
				<p></p>
			</div>
		</div>
	);
};

export default Search;
