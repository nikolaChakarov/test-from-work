import React, { useState, useContext, useEffect } from "react";
import "./CalendarYouTube.scss";
import { getMonth } from "../../utils/util";

import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";

const CalendarYouTube = () => {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	}, [monthIndex]);

	return (
		<div className="container-fluid" id="calendar">
			{showEventModal && <EventModal />}
			<CalendarHeader />
			<div className="flex flex-1">
				<Sidebar />
				<Month month={currentMonth} />
			</div>
		</div>
	);
};

export default CalendarYouTube;
