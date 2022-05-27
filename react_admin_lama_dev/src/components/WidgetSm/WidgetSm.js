import React from "react";
import styled from "styled-components";

import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
	return (
		<WidgetSmContainer>
			<span className="widget-sm-title">New Join Members</span>

			<ul className="widget-sm-list">
				<li className="widget-sm-item">
					<div className="img-wrapper">
						<img
							src="https://images.pexels.com/photos/1436986/pexels-photo-1436986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="user photo"
							className="widget-sm-img"
						/>
					</div>
					<div className="widget-sm-user">
						<span className="widget-sm-username">User Name</span>
						<span className="widget-sm-usertitle">Front-end dev</span>
					</div>

					<button className="widget-sm-bttn">
						<Visibility />
						Display
					</button>
				</li>
			</ul>
		</WidgetSmContainer>
	);
};

const WidgetSmContainer = styled.div`
	flex: 1;
	box-shadow: var(--box-shadow);
	padding: 20px;
	margin-right: 20px;

	.widget-sm-title {
		font-size: 32px;
		font-weight: 600;
	}

	.img-wrapper {
		width: 50px;
		height: 50px;
		box-shadow: inset 3px 3px 5px #000;
		border-radius: 50%;
		overflow: hidden;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			position: relative;
			z-index: -2;
		}
	}
`;

export default WidgetSm;
