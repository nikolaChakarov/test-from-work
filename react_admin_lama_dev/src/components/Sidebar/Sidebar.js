import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	LineStyle,
	Timeline,
	TrendingUp,
	Group,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubble,
	WorkOutline,
	Report,
} from "@mui/icons-material";

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<div className="sidebar-menu">
				<h3 className="sidebar-title">Dashboard</h3>
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<Link to={"/"}>
							<LineStyle />
							<span>Home</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/analytics"}>
							<Timeline />
							<span>Analitics</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/sales"}>
							<TrendingUp />
							<span>Sales</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="sidebar-menu">
				<h3 className="sidebar-title">Quick Menu</h3>
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<Link to={"/users"}>
							<Group />
							<span>Users</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/products"}>
							<Storefront />
							<span>Products</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/transactions"}>
							<AttachMoney />
							<span>Transactions</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"reports"}>
							<BarChart />
							<span>Reports</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="sidebar-menu">
				<h3 className="sidebar-title">Notifications</h3>
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<Link to={"/mail"}>
							<MailOutline />
							<span>Mail</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/feedback"}>
							<DynamicFeed />
							<span>Feedback</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/messages"}>
							<ChatBubble />
							<span>Messages</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="sidebar-menu">
				<h3 className="sidebar-title">Staff</h3>
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<Link to={"/manage"}>
							<WorkOutline />
							<span>Manage</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/staff-analytics"}>
							<Timeline />
							<span>Analitics</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"/staff-reports"}>
							<Report />
							<span>Reports</span>
						</Link>
					</li>
				</ul>
			</div>
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.section`
	flex: 1;
	background: lightgray;
	background: #eee;

	.sidebar-menu {
		margin-bottom: 10px;

		.sidebar-title {
			padding: 10px 5px;
			font-size: 14px;
			color: #777;
			border-bottom: 1px groove #fff;
		}

		.sidebar-list-item {
			display: flex;

			a {
				transition: all 0.3s ease-in-out;
				padding: 10px 5px;
				text-decoration: none;
				color: #000;
				display: block;
				display: flex;
				flex: 1;
				align-items: center;

				&:hover {
					background: var(--main-color);
					box-shadow: var(--inner-shadow);

					svg {
						color: #333;
					}
				}

				svg {
					margin-right: 10px;
					color: #777;
				}
			}
		}
	}
`;

export default Sidebar;
