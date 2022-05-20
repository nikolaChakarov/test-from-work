import React from "react";
import styled from "styled-components";

import Card from "../ui/Card";

const Meetupitem = (props) => {
	return (
		<Li>
			<Card>
				<div className="image">
					<img src={props.image} alt={props.title} />
				</div>
				<div className="content">
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className="actions">
					<button>To Favorites</button>
				</div>
			</Card>
		</Li>
	);
};

const Li = styled.li`
	margin: 1rem 0;

	.image {
		width: 100%;
		height: 20rem;
		overflow: hidden;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
	}

	.image img {
		width: 100%;
		object-fit: cover;
	}

	.content {
		text-align: center;
		padding: 1rem;
	}

	.content h3 {
		font-size: 1.25rem;
		color: #2c292b;
	}

	.actions {
		padding: 1.5rem;
		text-align: center;
	}

	.actions button {
		font: inherit;
		cursor: pointer;
		color: #77002e;
		border: 1px solid #77002e;
		background-color: transparent;
		padding: 0.5rem 1.5rem;
		border-radius: 4px;
	}

	.actions button:hover,
	.actions button:active {
		background-color: #ffe2ed;
	}
`;

export default Meetupitem;
