import React, { useRef } from "react";
import styled from "styled-components";
import Card from "../ui/Card";

const NewMeetupForm = () => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const title = titleInputRef.current.value;
		const image = imageInputRef.current.value;
		const address = addressInputRef.current.value;
		const description = descriptionInputRef.current.value;

		const meetupData = { title, image, address, description };
		console.log(meetupData);
	};

	return (
		<Card>
			<Form onSubmit={submitHandler}>
				<div className="control">
					<label htmlFor="title">Meetup Title</label>
					<input type="text" id="title" ref={titleInputRef} />
				</div>
				<div className="control">
					<label htmlFor="image">Meetup Image</label>
					<input type="url" id="image" ref={imageInputRef} />
				</div>
				<div className="control">
					<label htmlFor="address">Address</label>
					<input type="text" id="address" ref={addressInputRef} />
				</div>
				<div className="control">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						rows="5"
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className="actions">
					<button>Add Meetup</button>
				</div>
			</Form>
		</Card>
	);
};

const Form = styled.form`
	padding: 1rem;

	.control {
		margin-bottom: 0.5rem;
	}

	.control label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.control input,
	.control textarea {
		display: block;
		font: inherit;
		border-radius: 4px;
		border: 1px solid #ccc;
		padding: 0.25rem;
		width: 100%;
	}

	.actions {
		margin-top: 1rem;
		text-align: right;
	}

	.actions button {
		font: inherit;
		cursor: pointer;
		background-color: #77002e;
		color: white;
		padding: 0.5rem 1.5rem;
		border: 1px solid #77002e;
		border-radius: 4px;
		font-weight: bold;
	}

	.actions button:hover,
	.actions button:active {
		background-color: #a50e48;
		border-color: #a50e48;
	}
`;

export default NewMeetupForm;
