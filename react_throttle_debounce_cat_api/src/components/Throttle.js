import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import useThrottle from "../hooks/useThrottle";
import useScroll from "../hooks/useScroll";

const Throttle = () => {
	const [catsList, setCatsList] = useState([]);

	const scrollY = useScroll();

	return (
		<ThrottleEl>
			<h5>Throttle</h5>
			{new Array(100).fill("").map((el, i) => (
				<p key={i}>{i}</p>
			))}
		</ThrottleEl>
	);
};

const ThrottleEl = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 10px;
	overflow-y: scroll;
	background: lightgray;

	p {
		padding: 10px;
		margin: 20px;
		border: 1px dashed;
	}
`;

export default Throttle;
