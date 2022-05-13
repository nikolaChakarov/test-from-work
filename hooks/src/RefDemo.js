import { useState, useEffect, useRef } from "react";

const RefDemo = () => {
	const [inputValue, setInputValue] = useState("");

	const [inputValue2, setInputValue2] = useState("");

	const count = useRef(0);
	const inputEl = useRef();
	const prevValue = useRef("");

	const focusInput = () => {
		inputEl.current.style = "border: 3px dashed red; outline: none;";
	};

	useEffect(() => {
		count.current = count.current + 1;
	}, [count.current]);

	useEffect(() => {
		prevValue.current = inputValue2;
	}, [inputValue2]);

	return (
		<div>
			<h1>useRef</h1>
			<h5>persist values between renders</h5>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h3>Render Count: {count.current}</h3>
			<hr
				style={{
					margin: "20px 0",
				}}
			/>

			<h5>Accessing DOM Elements</h5>
			<input type="text" ref={inputEl} />
			<button onClick={focusInput}>Get Input</button>

			<hr
				style={{
					margin: "20px 0",
				}}
			/>
			<h5>Tracking State Changes</h5>
			<input
				type="text"
				value={inputValue2}
				onChange={(e) => setInputValue2(e.target.value)}
			/>
			<h2>Current Value: {inputValue2}</h2>
			<h2>Previous Value: {prevValue.current}</h2>
		</div>
	);
};

export default RefDemo;
