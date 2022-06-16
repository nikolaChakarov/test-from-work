import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import useScroll from "../../hooks/useScroll";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

const Home = () => {
	const { user } = useContext(GlobalContext);
	const navigate = useNavigate();
	const scrollY = useScroll();

	useEffect(() => {
		if (!user) {
			navigate('/register')
		}
	}, []);

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
