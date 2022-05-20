import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainNavigation = () => {
	return (
		<Header>
			<div className="logo">React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>All Meetups</Link>
					</li>
					<li>
						<Link to={"/new-meetup"}>Add New Meetup</Link>
					</li>
					<li>
						<Link to={"/favorites"}>My Favorites</Link>
					</li>
				</ul>
			</nav>
		</Header>
	);
};

const Header = styled.header`
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #77002e;
	padding: 0 10%;

	.logo {
		font-size: 2rem;
		color: white;
		font-weight: bold;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: baseline;
	}

	li {
		margin-left: 3rem;
	}

	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: #fcb8d2;
	}

	a:hover,
	a:active,
	a.active {
		color: white;
	}

	.badge {
		background-color: #cc2062;
		color: white;
		border-radius: 12px;
		padding: 0 1rem;
		margin-left: 0.5rem;
	}
`;

export default MainNavigation;
