import React from "react";
import MainNavigation from "./MainNavigation";
import styled from "styled-components";

const Layout = (props) => {
	return (
		<Div>
			<MainNavigation />
			<main>{props.children}</main>
		</Div>
	);
};

const Div = styled.div`
	main {
		margin: 3rem auto;
		width: 90%;
		max-width: 40rem;
	}
`;

export default Layout;
