import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../assets/img/iliev-soft.png";
import { GlobalContext } from "../../context/GlobalState";

import { NotificationsNone, Settings } from "@mui/icons-material/";

const Topbar = () => {
	const { notifications, scrollY } = useContext(GlobalContext);

	return (
		<TopBarWrapper bg={scrollY}>
			<div className="left">
				<div className="img-wrapper">
					<img src={logo} alt="iliev soft logo" />
				</div>
			</div>
			<div className="right">
				<div className="icon-wrapper">
					<NotificationsNone />
					<span className="badge">{notifications}</span>
				</div>

				<div className="icon-wrapper">
					<Settings />
				</div>
			</div>
		</TopBarWrapper>
	);
};

const TopBarWrapper = styled.section`
	/* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); */
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	position: sticky;
	top: 0;
	z-index: 1000;
	background: #fff;
	border-bottom: 1px groove #fff;
	/* box-shadow: ${({ bg }) =>
		bg > 0 ? "0 3px 6px rgba(0, 0, 0, 0.1)" : "none"}; */
	transition: all 0.5s ease-in-out;

	.right {
		display: flex;

		.icon-wrapper {
			position: relative;
			cursor: pointer;
			margin-right: 15px;

			&:last-of-type {
				margin-right: 0;
			}
		}

		.badge {
			position: absolute;
			border-radius: 50%;
			background: var(--main-color);
			color: #fff;
			width: 22px;
			height: 22px;
			top: -10px;
			right: -10px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
		}
	}
`;

export default Topbar;
