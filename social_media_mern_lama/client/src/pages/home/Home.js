import React from "react";
import styled from "styled-components";

import useScroll from "../../hooks/useScroll";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/topbar/Sidebar";
import Feed from "../../components/topbar/Feed";
import Rightbar from "../../components/topbar/Rightbar";

const Home = () => {
	const scrollY = useScroll();

	return (
		<HomeContainer>
			<Topbar scrollY={scrollY} />
			<div className="inner-layout">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	.inner-layout {
		overflow-y: scroll;
		display: flex;
		flex: 1;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export default Home;
