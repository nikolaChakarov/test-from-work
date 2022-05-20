import React from "react";
import styled from "styled-components";
import Meetupitem from "./Meetupitem";

const MeetupList = (props) => {
	return (
		<Ul>
			{props.meetups.map((el, i) => (
				<Meetupitem key={i} {...el} />
			))}
		</Ul>
	);
};

const Ul = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export default MeetupList;
