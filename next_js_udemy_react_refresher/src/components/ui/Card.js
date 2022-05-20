import React from "react";
import styled from "styled-components";

const Card = (props) => {
	return <Div>{props.children}</Div>;
};

const Div = styled.div`
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export default Card;
