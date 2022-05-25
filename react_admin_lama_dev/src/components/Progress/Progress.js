import React, { useRef, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function CircularProgressWithLabel(props) {
	return (
		<div>
			<CircularProgress variant="determinate" {...props} />
			<p>{`${Math.round(props.value / 33)}`}</p>
		</div>
	);
}

export default function CircularStatic() {
	const [count, setCount] = useState(3);
	let timer = useRef(null);

	const startCounter = () => {
		timer.current = setInterval(() => {
			setCount((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
	};

	console.log(timer.current);

	useEffect(() => {
		startCounter();
		return () => clearInterval(timer.current);
	}, []);

	return (
		<>
			<span>hold for:</span>
			<CircularProgressWithLabel value={count * 33} />
			<span>seconds!</span>
		</>
	);
}
