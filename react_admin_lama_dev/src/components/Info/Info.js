import React, { useState, useRef, useEffect } from "react";
import useScroll from "../../hooks/useScroll";
import styled from "styled-components";

let id = 0;
const db = Array.from(
	new Array(100).fill("").map((el) => {
		id++;
		return {
			id,
			name: "test " + id,
		};
	})
);

const Info = () => {
	const scrollY = useScroll();
	const [showItem, setShowItem] = useState({});

	const internalRef = useRef(null);
	const [counter, setCounter] = useState(0);
	const [id, setId] = useState(null);

	const startCounter = (e) => {
		if (counter > 0) {
			setShowItem({});
			setCounter(0);
			return;
		}

		if (internalRef.current) {
			return;
		}

		internalRef.current = setInterval(() => {
			setCounter((prev) => prev + 1);
			setId(e.target.dataset.id);
		}, 2000);
	};

	const stopCounter = () => {
		if (internalRef.current) {
			clearInterval(internalRef.current);
			internalRef.current = null;
			setId(null);
		}
	};

	const onItemClick = (id) => {
		const currentItemId = id;

		setShowItem({ [currentItemId]: !showItem[currentItemId] });
	};

	useEffect(() => {
		if (counter > 0) {
			onItemClick(id);
		}

		return () => stopCounter();
	}, [counter]);

	return (
		<div className="temp">
			<Ul>
				{db.map((el, i) => {
					return (
						<React.Fragment key={i}>
							<li
								onMouseDown={startCounter}
								onMouseUp={stopCounter}
								onMouseLeave={stopCounter}
								data-id={el.id}
							>
								{el.id}
							</li>

							{showItem[el.id] && (
								<InnerDiv>
									<span>{el.id}</span>
									<span>{el.name}</span>
								</InnerDiv>
							)}
						</React.Fragment>
					);
				})}
			</Ul>
		</div>
	);
};

const Ul = styled.ul`
	list-style: none;

	li {
		border: 1px groove;
		margin: 10px;
		cursor: pointer;
		padding: 5px;
	}
`;

const InnerDiv = styled.div`
	border: 2px dashed red;
	padding: 5px;
	margin: 10px;
`;

export default Info;
