import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./CalendarRepeat.scss";

const CalendarRepeat = () => {
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [currentDate, setCurrentDate] = useState(null);
	const [month, setMonth] = useState(getMonth());
	const [test, setTest] = useState(1);

	const resetTest = () => {
		setTest({
			count: 1,
			end: false,
		});

		return "";
	};

	const toggleMonthIndex = (val) => {
		setTest({
			count: 1,
			end: false,
		});

		if (val === 0) {
			setMonthIndex(0);
			return;
		}
		setMonthIndex(monthIndex + val);
	};

	useEffect(() => {
		setCurrentDate((prev) => {
			return dayjs(new Date(dayjs().year(), monthIndex));
		});

		resetTest((prev) => prev + 1);

		setMonth(getMonth(monthIndex));
	}, [monthIndex]);

	return (
		<div className="container-fluid" id="calendar-repeat">
			<h1>Calendar</h1>
			<span>{currentDate?.year()}</span>
			<span> {currentDate?.format("MMMM")} </span>
			<button onClick={() => toggleMonthIndex(-1)}>prev</button>
			<button onClick={() => toggleMonthIndex(1)}>next</button>
			<button onClick={() => toggleMonthIndex(0)}>Today</button>

			<div className="month-layout">
				{month.map((row, i) => {
					return (
						<div className="week" key={i}>
							{row.map((day, idx) => {
								return (
									<div
										className={`day ${test >= day.date() ? "" : "padding-day"}`}
										key={idx}
									>
										{day.format("DD")}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const getMonth = (month = dayjs().month()) => {
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 0)).day(); // 0 if we want to start the week from monday not sunday

	let count = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(6).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			count++;

			return dayjs(new Date(year, month, count));
		});
	});

	return daysMatrix;
};

export default CalendarRepeat;
