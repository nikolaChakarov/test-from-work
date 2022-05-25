import styled from "styled-components";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<div className="sidebar-menu">
				<h3 className="sidebar-title">Dashboard</h3>
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<LineStyle />
						<span>Home</span>
					</li>

					<li className="sidebar-list-item">
						<Timeline />
						<span>Analitics</span>
					</li>

					<li className="sidebar-list-item">
						<TrendingUp />
						<span>Sales</span>
					</li>
				</ul>
			</div>
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.section`
	flex: 1;
	background: lightgray;
`;

export default Sidebar;
