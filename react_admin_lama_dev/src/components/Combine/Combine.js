import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import CircularStatic from "../Progress/Progress";
import ReactPaginate from "react-paginate";

let id = 0;
const db = Array.from(
	new Array(400).fill("").map((el) => {
		id++;
		return { id, name: "item id: " + id };
	})
);

const Combine = () => {
	// pagination https://www.youtube.com/watch?v=HANSMtDy508
	/* which page we are in */
	const [data, setData] = useState(db);
	const [pageNumber, setPageNumber] = useState(0);
	const itemsPerPage = 4;
	const pagesVisited = pageNumber * itemsPerPage;
	const pageCount = Math.ceil(data.length / itemsPerPage);

	const displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	/* end pagination */

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
				{displayItems.map((el, i) => (
					<React.Fragment key={i}>
						<li
							data-id={el.id}
							onMouseDown={handlerStartCounter}
							onMouseUp={handlerStopCounter}
							onMouseLeave={handlerStopCounter}
						>
							{el.id}

							{showSpinner[el.id] && (
								<div className="spinner">
									<CircularStatic />
								</div>
							)}
						</li>

						{showLiItem[el.id] && (
							<ItemContainer style={{ opacity: 1, visibility: "visible" }}>
								<span>
									This ID: {el.id} has this name: {el.name}
								</span>
							</ItemContainer>
						)}
					</React.Fragment>
				))}
			</ul>

			<ReactPaginate
				previousLabel={"Previous"}
				marginPagesDisplayed={2}
				nextLabel={"Next"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={"pagination-container"}
				previousLinkClassName={"pagination-btn"}
				nextLinkClassName={"pagination-btn"}
				activeClassName={"pagination-active"}
				pageClassName={"pagination-page"}
				pageLinkClassName={"pagination-page-link"}
				breakClassName={"break"}
				breakLinkClassName={"break"}
			/>
		</CombineContainer>
	);
};

const CombineContainer = styled.section`
	display: flex;
	flex-direction: column;
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
				right: 5px;
				top: 5px;
			}
		}
	}

	.break {
		background: red;
	}

	.pagination-container {
		display: flex;
		justify-content: center;
		margin-top: auto;
		width: 50%;

		* {
			padding: 0;
			margin: 0;
		}
	}

	.pagination-page {
		width: 50px;
		height: 30px;
		display: flex;
		margin: 0 5px;
	}

	.pagination-page-link {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.pagination-active {
		background: #dedede;
	}
`;

const ItemContainer = styled.div`
	padding: 5px;
	margin: 5px;
	display: flex;
	border: 2px dashed red;
	visibility: hidden;
	opacity: 0;
	transition: opacity 2s ease-in-out;
	transition-duration: 4s;
`;

export default Combine;
