import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
	const inputEl = useRef();

	const [query, setQuery] = useState("");
	const [catsList, setCatsList] = useState([]);

	const onInputChange = (e) => {
		setQuery(e.target.value);
	};
	const debounced = useDebounce(query, 1000);

	const callApi = async () => {
		try {
			const dbRes = await (
				await fetch("https://api.thecatapi.com/v1/breeds")
			).json();

			const data = dbRes.filter((el) =>
				el.name.toLowerCase().includes(query.toLowerCase())
			);

			setCatsList(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (debounced) {
			callApi();
		} else {
			setCatsList([]);
		}
	}, [debounced]);

	return (
		<DebounceEl>
			<label>
				<span>Search</span>
				<input
					type="text"
					name="search"
					ref={inputEl}
					onChange={onInputChange}
				/>
			</label>
			<hr />
			<ul>
				{catsList.map((el, i) => (
					<li key={i}>{el.name}</li>
				))}
			</ul>
		</DebounceEl>
	);
};

const DebounceEl = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow-y: scroll;
	margin: 10px;

	input {
		margin-bottom: 10px;
	}
`;

export default Debounce;
