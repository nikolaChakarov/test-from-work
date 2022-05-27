import React from "react";
import styled from "styled-components";

const WidgetLg = () => {
	return (
		<WidgetLgContainer>
			<h1>Iliev Soft</h1>
		</WidgetLgContainer>
	);
};

const WidgetLgContainer = styled.div`
	flex: 2;
	box-shadow: var(--box-shadow);
	padding: 20px;

	h1 {
		font-size: 50px;
	}
`;

export default WidgetLg;
