import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import CircularStatic from "../Progress/Progress";

let id = 0;
const db = Array.from(
	new Array(20).fill("").map((el) => {
		id++;
		return { id, name: "item id: " + id };
	})
);

const Combine = () => {
	/* li handlers */
	let showLiTimer = useRef(null);

	const [showLiItem, setShowLiItem] = useState({});
	const [showLiItemCounter, setShowLiItemCounter] = useState(0);
	const [itemId, setItemId] = useState(null);

	const [showSpinner, setShowSpinner] = useState({});

	const handlerStartCounter = (e) => {
		// this if -> not to whait when we close the LI
		if (showLiItemCounter > 0) {
			setShowLiItem({});
			setShowLiItemCounter(0);
			return;
		}

		setShowSpinner({ [e.target.dataset.id]: true });

		showLiTimer.current = setInterval(() => {
			setShowLiItemCounter((prev) => prev + 1);
			setItemId(e.target.dataset.id);
		}, 3000);
	};

	const handlerStopCounter = () => {
		clearInterval(showLiTimer.current);
		showLiTimer.current = null;
		setItemId(null);
		setShowSpinner({});
	};

	const onItemClick = (id) => {
		const currentItemId = id;

		setShowLiItem({ [currentItemId]: !showLiItem[currentItemId] });
	};

	useEffect(() => {
		if (showLiItemCounter > 0) {
			onItemClick(itemId);
		}

		return () => handlerStopCounter();
	}, [showLiItemCounter]);

	/* end li handlers */

	return (
		<CombineContainer className="temp">
			<ul>
				{db.map((el, i) => (
					<React.Fragment key={i}>
						<li
							data-id={el.id}
							onMouseDown={handlerStartCounter}
							onMouseUp={handlerStopCounter}
							onMouseLeave={handlerStopCounter}
						>
							{el.id}

							{showSpinner[el.id] && <CircularStatic />}
						</li>

						{showLiItem[el.id] && (
							<ItemContainer>
								<span>
									This ID: {el.id} has this name: {el.name}
								</span>
							</ItemContainer>
						)}
					</React.Fragment>
				))}
			</ul>
		</CombineContainer>
	);
};

const CombineContainer = styled.section`
	ul {
		list-style: none;

		li {
			padding: 5px;
			margin: 5px;
			border: 1px solid;
			cursor: pointer;
			position: relative;

			.spinner {
				position: absolute;
			}
		}
	}
`;

const ItemContainer = styled.div`
	padding: 5px;
	margin: 5px;
	display: flex;
	border: 2px dashed red;
`;

export default Combine;
