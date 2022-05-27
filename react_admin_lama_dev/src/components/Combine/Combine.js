import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import CircularStatic from "../Progress/Progress";
import Pagination from "react-js-pagination";

import {
	FirstPage,
	LastPage,
	ChevronLeftOutlined,
	ChevronRightOutlined,
} from "@mui/icons-material";

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
	// const [pageNumber, setPageNumber] = useState(1);
	// const itemsPerPage = 16;
	// const pagesVisited = pageNumber * itemsPerPage;
	// const pageCount = Math.ceil(data.length / itemsPerPage);

	// const displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage);
	// const changePage = (num) => {
	// 	console.log(num);
	// 	setPageNumber(num);
	// };
	/* end pagination */

	const [activePage, setActivePage] = useState(1);
	const itemsPerPage = 12;
	const pagesVisited = (activePage - 1) * itemsPerPage;
	const displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage);

	const changePage = (num) => {
		setActivePage(num);
	};

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
			<ul className="list-items">
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

			<Pagination
				totalItemsCount={data.length}
				onChange={changePage}
				activePage={activePage}
				itemsCountPerPage={itemsPerPage}
				pageRangeDisplayed={3}
				firstPageText={<FirstPage />}
				prevPageText={<ChevronLeftOutlined />}
				lastPageText={<LastPage />}
				nextPageText={<ChevronRightOutlined />}
				innerClass={"pagination-container"}
				itemClass={"pagination-item"}
				linkClass={"pagination-link"}
				itemClassFirst={"pagination-btn-end"}
				itemClassLast={"pagination-btn-end"}
				itemClassNext={"pagination-btn"}
				itemClassPrev={"pagination-btn"}
				activeLinkClass={"pagination-active"}
			/>
		</CombineContainer>
	);
};

const CombineContainer = styled.section`
	display: flex;
	flex-direction: column;

	ul.list-items {
		display: flex;
		flex-wrap: wrap;

		li {
			width: 20%;
			margin: 5px;
		}
	}

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
		* {
			padding: 0;
			margin: 0;
		}
		display: flex;
		justify-content: center;
		margin-top: auto;
		margin-bottom: 20px;

		.pagination-item {
			border: 1px groove #fff;
			width: 50px;
			height: 30px;
			display: flex;
			margin-right: 10px;
			&:last-of-type {
				margin-right: 0;
			}
		}

		.pagination-link {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			color: #333;
		}

		.pagination-active {
			background: #333;
			color: #fff;
			transition: all 0.2s ease-in-out;

			&:hover {
				box-shadow: inset 0px 0px 5px red;
			}
		}
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
