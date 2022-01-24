import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useWidth } from "../../../../../utils/hooks";

import Paginate from "../../Paginate/Paginate";

import "./Notifications.scss";

/* to get from real database... and delete after */
const db = [
	...new Array(20).fill({
		id: v4(),
		type: "Travaux à réaliser",
		body: "Notification",
		date: () => {
			let temp = new Date();
			return temp.toDateString();
		},
	}),
	...new Array(5).fill({
		id: v4(),
		type: "Pour information",
		body: "Notification",
		date: () => {
			let temp = new Date();
			return temp.toDateString();
		},
	}),
];

const Notifications = () => {
	const [currentFilter, setCurrentFilter] = useState("Tous");
	const [showFilters, setShowFilters] = useState(false);
	const [notifications, setNotifications] = useState([...db]);

	const width = useWidth();

	const toggleNotification = (e) => {
		const chosenFilter = e.target.dataset.name;

		setCurrentFilter(chosenFilter);

		if (chosenFilter === "Tous") {
			setNotifications((prev) => {
				return [...db];
			});
		} else {
			setNotifications((prev) => {
				const filtered = db.filter((el) => el.type === chosenFilter);
				return [...filtered];
			});
		}

		setShowFilters(!showFilters);
	};

	return (
		<div
			className="container-fluid d-flex flex-column"
			id="notifications-wrapper"
		>
			{/* title; button -> filters; */}
			<div className="notif-header">
				<h4>Notifications</h4>
				{/*------------------- Filters button DESKTOP-------------------*/}
				<div
					className="filters-bttn ms-auto d-md-flex d-none flex-column"
					style={{
						borderRadius: showFilters ? "1.3rem" : "",
					}}
				>
					<div className="d-flex justify-content-between">
						<p className="p-current-filter">{currentFilter}</p>
						<img
							className="img-fluid filters-arrow"
							src="/img/svg/arrow-down.svg"
							alt="arrow icon"
							onClick={() => setShowFilters(!showFilters)}
							style={{
								transform: showFilters ? "rotate(180deg)" : "",
							}}
						/>
					</div>

					{showFilters ? (
						<Filters
							toggleNotification={toggleNotification}
							currentFilter={currentFilter}
						/>
					) : null}
				</div>
				{/*------------------- end Filters button Desktop-------------------*/}
			</div>

			{/* notificatoins body */}
			{/* list -> norifications with pagination*/}
			<div className="notif-body d-flex flex-column">
				{width > 576 ? (
					<NotificationsToRenderDesktop notifications={notifications} />
				) : (
					<MobileNotif notifications={notifications} />
				)}
			</div>
		</div>
	);
};

/* component with pagination DESKTOP*/
const NotificationsToRenderDesktop = ({ notifications }) => {
	const [pageNumber, setPageNumber] = useState(0);
	const notificationsPerPage = 12;
	const visitedPages = pageNumber * notificationsPerPage;
	const pageCount = Math.ceil(notifications.length / notificationsPerPage);

	const displayNotifications = notifications.slice(
		visitedPages,
		visitedPages + notificationsPerPage
	);

	return (
		<div className="container-fluid d-flex flex-column paginate desktop-notif-wrapper">
			<div className="purple-border">
				{displayNotifications.map((el, i) => {
					return <DesktopNotif key={i} el={el} />;
				})}
			</div>

			<div className="paginate-custom d-md-block d-none mt-auto">
				<Paginate setPageNumber={setPageNumber} pageCount={pageCount} />
			</div>
		</div>
	);
};

/* list for desktop; different layout */
const DesktopNotif = ({ el }) => {
	return (
		<div className="desktop-notif-el">
			<Link to={`/notifications/${el.id}`}>
				<p>{el.type}</p>
				<p>{el.notification}</p>
				<p>{el.date()}</p>
			</Link>
		</div>
	);
};

/* list for mobile; different layout MOBILE*/
const MobileNotif = ({ notifications }) => {
	return (
		<>
			{notifications.map((el, i) => {
				return (
					<div className="mobile-notif-wrapper" key={i}>
						<p>{el.type}</p>
						{console.log(el)}
						<Link to={`/notifications/${el.id}`}>
							<p>{el.body}</p>
							<p>{el.date()}</p>
						</Link>
					</div>
				);
			})}
		</>
	);
};

/* Filters for the component */
const Filters = ({ toggleNotification, currentFilter }) => {
	const filters = ["Tous", "Travaux à réaliser", "Pour information"];
	return (
		<div className="filters-list d-flex flex-column align-items-start">
			{filters
				.filter((el) => el !== currentFilter)
				.map((el, i) => {
					return (
						<p
							className="p-filter"
							key={i}
							data-name={el}
							onClick={toggleNotification}
						>
							{el}
						</p>
					);
				})}
		</div>
	);
};

export default Notifications;
