import { useState, useEffect } from "react";

import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Day from "./Day/Day";

import "./Calendar.scss";

import db from "../../utils/calendar-db";

const Calendar = () => {
	const [nav, setNav] = useState(0);
	const [days, setDays] = useState([]);
	const [dateDisplay, setDateDisplay] = useState("");

	const [click, setClick] = useState(false);
	const [events, setEvents] = useState(
		localStorage.getItem("events")
			? JSON.parse(localStorage.getItem("events"))
			: []
	);

	const eventForDate = (date) => events.find((e) => e.date === date);

	useEffect(() => {
		localStorage.setItem("events", JSON.stringify(events));
	}, [events]);

	useEffect(() => {}, [events, nav]);

	return (
		<div className="container-fluid" id="calendar">
			<CalendarHeader />

			<div className="week-days d-flex justify-content-between">
				{db.daysLong.map((el, i) => {
					return <p key={i}>{el}</p>;
				})}
			</div>

			<div className="days-wrapper">
				{days.map((d, i) => {
					return (
						<Day
							key={i}
							day={d}
							onClick={() => {
								if (d.value !== "padding") {
									setClick(d.date);
								}
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Calendar;
