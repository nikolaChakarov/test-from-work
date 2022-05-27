import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styled from "styled-components";

import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

const Home = () => {
	const { userData, getUserData } = useContext(GlobalContext);

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<HomeContainer>
			<FeaturedInfo />
			<Chart
				title={"User Analytics"}
				grid
				data={userData}
				dataKey={"Active User"}
			/>

			<WidgetsContainer>
				<WidgetSm />
				<WidgetLg />
			</WidgetsContainer>
		</HomeContainer>
	);
};

const HomeContainer = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const WidgetsContainer = styled.section`
	display: flex;
	margin: 20px;
`;

export default Home;
