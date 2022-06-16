import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import styled from "styled-components";

import useForm from "../hooks/useForm";
import useDebounce from "../hooks/useDebounce";

import { Chat, Notifications, Person, Search } from "@mui/icons-material";

const Topbar = ({ scrollY }) => {


	const { user } = useContext(GlobalContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	const { values, handleInputChange } = useForm(null, {
		search: "",
	});

	const debounced = useDebounce(values.search, 1000);


	useEffect(() => { }, [debounced]);

	return (
		<TopbarContainer scrollY={scrollY}>
			<div className="topbar-left">
				<Link to={"/"}>
					<span className="logo">logo</span>
				</Link>
			</div>

			<div className="topbar-center">
				<div className="searchbar">
					<Search className="search-icon" />
					<input
						type="text"
						placeholder="Search for friends, post or video"
						className="search-input"
						name="search"
						value={values.search}
						onChange={handleInputChange}
					/>
				</div>
			</div>

			<div className="topbar-right">
				<div className="topbar-links">
					<span className="topbar-link">Homepage</span>
					<span className="topbar-link">Timeline</span>
				</div>

				<div className="topbar-icons">
					<div className="topbar-icon-item">
						<Person className="item-icons" />
						<span className="topbar-icon-badge">1</span>
					</div>

					<div className="topbar-icon-item">
						<Chat className="item-icons" />
						<span className="topbar-icon-badge">2</span>
					</div>

					<div className="topbar-icon-item">
						<Notifications className="item-icons" />
						<span className="topbar-icon-badge">1</span>
					</div>
				</div>
				<Link to={`/profile/${user.username}`}>
					<div className="toolbar-image-wrapper">
						<img src={`${user?.profilePicture ? user?.profilePicture : PF + 'person/noAvatar.png'}`} alt="" className="topbar-image" />
					</div>
				</Link>
			</div>
		</TopbarContainer>
	);
};

const TopbarContainer = styled.div`
	height: 50px;
	background: var(--main-color);
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	box-shadow: ${({ scrollY }) =>
		scrollY > 0 ? "0px 3px 3px 0px rgba(0, 0, 0, .3)" : "none"};
	transition: all 0.5s ease-in-out;

	.topbar-left {
		flex: 3;

		.logo {
			font-size: 24px;
			margin-left: 20px;
			font-weight: bold;
			color: #fff;
			cursor: pointer;
		}
	}

	.topbar-center {
		flex: 5;

		.searchbar {
			box-shadow: inset 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
			width: 100%;
			height: 30px;
			background: #fff;
			border-radius: 30px;
			display: flex;
			align-items: center;
			padding: 0 10px;
		}

		.search-icon {
			font-size: 20px;
			color: #777;
		}

		.search-input {
			flex: 1;
			border: none;
		}
	}

	.topbar-right {
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #fff;
	}

	.topbar-link {
		margin-right: 10px;
		font-size: 14px;
		cursor: pointer;
	}

	.topbar-icons {
		display: flex;

		.topbar-icon-item {
			margin-right: 15px;
			cursor: pointer;
			position: relative;
			display: flex;

			span {
				font-size: 12px;
				background: #777;
				width: 17px;
				height: 17px;
				position: absolute;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				top: -5px;
				right: -10px;
			}

			&:last-of-type {
				margin-right: 0;
			}
		}

		.item-icons {
			font-size: 20px;
		}
	}

	.toolbar-image-wrapper {
		box-shadow: inset 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		cursor: pointer;
	}

	.topbar-image {
		width: 32px;
		height: 32px;
		object-fit: cover;
		border-radius: 50%;
		position: relative;
		z-index: -1;
	}
`;

export default Topbar;
