import React, { useState, useEffect } from "react";
import "./RadioBttn.scss";

const RadioBttn = () => {
	const [bttn, setBttn] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setBttn({
			[name]: value,
		});
	};

	useEffect(() => {
		console.log(bttn);
	}, [bttn]);

	return (
		<div>
			Windows
			<input
				id="windows"
				value="windows"
				name="platform"
				type="radio"
				onChange={handleChange}
			/>
			Mac
			<input
				id="mac"
				value="mac"
				name="platform"
				type="radio"
				onChange={handleChange}
			/>
			Linux
			<input
				id="linux"
				value="linux"
				name="platform"
				type="radio"
				onChange={handleChange}
			/>
		</div>
	);
};

const RadioButton = ({ label, value, onChange }) => {
	return (
		<label>
			<input type="radio" checked={value} onChange={onChange} />
			{label}
		</label>
	);
};

export default RadioBttn;
