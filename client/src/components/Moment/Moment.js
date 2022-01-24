import { useState } from "react";

const db = [
	{ id: 1, name: "1", date: "11/17/2021" },
	{ id: 2, name: "2", date: "11/17/2021" },
	{ id: 3, name: "3", date: "11/16/2021" },
	{ id: 4, name: "4", date: "11/15/2021" },
	{ id: 5, name: "5", date: "11/11/2021" },
];

const Moment = () => {
	const [messages, setMessages] = useState([...db]);
	let [date, setDate] = useState("");

	const sortData = () => {
		// setSorted((prev) => {
		// 	let temp = prev.reduce((acc, curr) => {
		// 		let date = getDate(curr.date);

		// 		if (!acc[date]) {
		// 			acc[date] = [];
		// 		}

		// 		acc[date].push(curr);
		// 		return acc;
		// 	}, {});
		// });

		let temp = db.reduce((acc, curr) => {
			let date = getDate(curr.date);

			if (!acc[date]) {
				acc[date] = [];
			}

			acc[date].push(curr);
			return acc;
		}, {});

		console.log(Object.entries(temp));
	};

	return (
		<div>
			<h1>MOMENT</h1>
			<button onClick={sortData}>Sort</button>
		</div>
	);
};

const getDate = (date) => {
	let today = new Date().getDate();
	let month = new Date().getMonth() + 1;
	let year = new Date().getFullYear();

	let yestarday = new Date().getDate() - 1;

	let todayTimestamp = Date.parse(`${month} ${today} ${year}`);
	let yestardayTimestamp = Date.parse(`${month} ${yestarday} ${year}`);
	let dateTimestamp = Date.parse(date);

	if (todayTimestamp == dateTimestamp) {
		return "TODAY";
	} else if (dateTimestamp == yestardayTimestamp) {
		return "YESTERDAY";
	} else {
		return date;
	}
};

export default Moment;
