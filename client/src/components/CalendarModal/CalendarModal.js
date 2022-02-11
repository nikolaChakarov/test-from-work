import React, { useEffect, useState } from "react";
import "./CalendarModal.scss";

import dayjs from "dayjs";
import "dayjs/locale/fr";

import { ReactComponent as ArrowIcon } from "../../img/arrow-down.svg";

const CalendarModal = () => {
	dayjs.locale("fr");
	const daysLetters = ["L", "M", "M", "J", "V", "S", "D"];

	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [monthMatrix, setMonthMatrix] = useState(getMonthMatrix(monthIndex));
	const [currentMonth, setCurrentMonth] = useState(dayjs().format("MMMM"));
	const [currentYear, setCurrentYear] = useState(dayjs().format("YYYY"));

	const [currentDateString, setCurrentDateString] = useState(
		dayjs().format("DD MMMM YYYY").toLocaleUpperCase()
	);

	const toggleMonthIndex = (val) => {
		if (val === 0) {
			setMonthIndex(0);
			return;
		}
		setMonthIndex(monthIndex + val);
	};

	useEffect(() => {
		setMonthMatrix(getMonthMatrix(monthIndex));
	}, [monthIndex]);

	return (
		<div className="container-fluid" id="calendar-modal">
			<div className="calendar-title">
				<h1>Chosir une date</h1>
				<div className="date-to-display">{currentDateString}</div>
			</div>

			<div className="calendar-controls d-flex">
				<div className="months">
					<div className="select-wrapper">
						<div className="inner-select-wrapper d-flex">
							<span>{currentMonth}</span>
							<ArrowIcon />
						</div>
					</div>
				</div>
				<div className="years">
					<div className="select-wrapper">
						<div className="inner-select-wrapper d-flex">
							<span>{currentYear}</span>
							<ArrowIcon />
						</div>
					</div>
				</div>

				<div className="bttns-calendar-set d-flex">
					<ArrowIcon
						onClick={() => toggleMonthIndex(-1)}
						style={{
							transform: "rotate(90deg)",
						}}
					/>

					<button onClick={() => toggleMonthIndex(0)}>today</button>
					<ArrowIcon
						onClick={() => toggleMonthIndex(1)}
						style={{
							transform: "rotate(-90deg)",
						}}
					/>
				</div>
			</div>

			<ul className="ul-days d-flex">
				{daysLetters.map((el, i) => {
					return (
						<li className="li-day" key={i}>
							{el}
						</li>
					);
				})}
			</ul>

			<div className="calendar-body">
				{monthMatrix.map((week, i) => {
					return (
						<ul className="ul-week" key={i}>
							{week.map((day, idx) => {
								return (
									<li
										className={`li-day ${
											day.month() == monthIndex ? "current-day" : ""
										}`}
										key={idx}
									>
										{day.format("DD")}
									</li>
								);
							})}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

const getMonthMatrix = (month = dayjs().month(), year = dayjs().year()) => {
	const firstDayOfTheMonth = dayjs(new Date(year, month, 0)).day();

	let count = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(6).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			count++;

			return dayjs(new Date(year, month, count));
		});
	});

	return daysMatrix;
};

export default CalendarModal;
