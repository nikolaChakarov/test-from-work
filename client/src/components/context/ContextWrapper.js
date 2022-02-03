import React, { useState, useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext";

import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
	switch (type) {
		case "push":
			return [...state, payload];
		case "update":
			return state.map((el) => (el.id === payload.id ? payload : el));
		case "delete":
			return state.filter((el) => el.id !== payload.id);
		default:
			return new Error();
	}
}

function initEvents() {
	const storageEvents = localStorage.getItem("savedEvents");
	const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
	return parsedEvents;
}

const ContextWrapper = (props) => {
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
	const [daySelected, setDaySelected] = useState(null);
	const [showEventModal, setShowEventModal] = useState(false);

	const [savedEvents, dispatchCallEvents] = useReducer(
		savedEventsReducer,
		[],
		initEvents
	);

	useEffect(() => {
		if (smallCalendarMonth !== null) {
			setMonthIndex(smallCalendarMonth);
		}
	}, [smallCalendarMonth]);

	useEffect(() => {
		localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
	}, [savedEvents]);

	return (
		<GlobalContext.Provider
			value={{
				monthIndex,
				setMonthIndex,
				smallCalendarMonth,
				setSmallCalendarMonth,
				daySelected,
				setDaySelected,
				showEventModal,
				setShowEventModal,
				savedEvents,
				dispatchCallEvents,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default ContextWrapper;
