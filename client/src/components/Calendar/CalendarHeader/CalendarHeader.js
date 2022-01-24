import React from "react";
import "./CalendarHeader.scss";

const CalendarHeader = () => {
	return (
		<div className="container-fluid d-flex justify-content-between calendar-header">
			<div id="monthDisplay"></div>
			<div className="d-flex">
				<button className="me-md-5">Back</button>
				<button>Next</button>
			</div>
		</div>
	);
};

export default CalendarHeader;
