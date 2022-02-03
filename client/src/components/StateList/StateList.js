import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { useForm } from "../../utils/useForm";

const StateList = () => {
	const { dispatchCallEvents, savedEvents } = useContext(GlobalContext);

	const onFormSubmit = (e) => {
		const currentEvent = {
			...values,
			id: Date.now(),
		};

		console.log(currentEvent, "this are saved evetns from the component");

		dispatchCallEvents({ type: "push", payload: currentEvent });
	};

	const { onChange, onSubmit, values } = useForm(onFormSubmit, {
		title: "",
		event: "",
	});

	const getCurrentEventInfo = (e) => {
		const id = e.currentTarget.dataset.id;
		let currentEvent = savedEvents.find(
			(el) => el.id.toString() === id.toString()
		);

		console.log(currentEvent);
	};

	return (
		<div className="container-fluid" id="state-list">
			<form className="state-list-form" onSubmit={onSubmit}>
				<input
					type="text"
					name="title"
					onChange={onChange}
					value={values.title}
				/>
				<input
					type="text"
					name="event"
					onChange={onChange}
					value={values.event}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<hr />
			<h1>List Elements</h1>
			<ul>
				{savedEvents.map((ev, i) => {
					return (
						<li key={i} onClick={getCurrentEventInfo} data-id={ev.id}>
							<span>Title: {ev.title}</span> <span>Event: {ev.event}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default StateList;
