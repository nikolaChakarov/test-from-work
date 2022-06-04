import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	Bookmark,
	Chat,
	Event,
	Group,
	HelpOutline,
	PlayCircle,
	RssFeed,
	School,
	WorkOutline,
} from "@mui/icons-material";

const Sidebar = () => {
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<SidebarContainer>
			<div className="sidebar-wrapper">
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<Link to={"#"}>
							<RssFeed className="sidebar-icon" />
							<span className="sidebar-list-item-text">Feed</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<Chat className="sidebar-icon" />
							<span className="sidebar-list-item-text">Chats</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<PlayCircle className="sidebar-icon" />
							<span className="sidebar-list-item-text">Videos</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<Group className="sidebar-icon" />
							<span className="sidebar-list-item-text">Groups</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<Bookmark className="sidebar-icon" />
							<span className="sidebar-list-item-text">Bookmarks</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<HelpOutline className="sidebar-icon" />
							<span className="sidebar-list-item-text">Questions</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<WorkOutline className="sidebar-icon" />
							<span className="sidebar-list-item-text">Jobs</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<Event className="sidebar-icon" />
							<span className="sidebar-list-item-text">Events</span>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to={"#"}>
							<School className="sidebar-icon" />
							<span className="sidebar-list-item-text">Courses</span>
						</Link>
					</li>
				</ul>

				<button className="sidebar-button" onClick={handleShowMore}>
					{showMore ? "Show Less" : "Show More"}
				</button>

				{showMore && (
					<ul className="sidebar-friend-list">
						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>

						<li className="sidebar-friend">
							<img
								src="/assets/person/2.jpeg"
								alt=""
								className="sidebar-friend-img"
							/>
							<span className="sidebar-friend-name">Marko Pollo</span>
						</li>
					</ul>
				)}
			</div>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	background: #eaeaea;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	.sidebar-wrapper {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			display: none;
		}

		ul.sidebar-list {
			display: flex;
			flex-direction: column;

			li.sidebar-list-item {
				display: flex;
				border-bottom: 1px groove #fff;

				.sidebar-icon {
					color: #777;
					margin-right: 10px;
				}

				& a:hover .sidebar-icon {
					color: #333;
				}

				a {
					color: #777;
					flex: 1;
					display: flex;
					align-items: center;
					padding: 20px 20px;
					transition: all 0.5s ease-in-out;

					&:hover {
						box-shadow: inset 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
						background: #c6c6c6;
						color: #333;
					}
				}
			}
		}

		.sidebar-button {
			min-width: 200px;
			border: 1px groove #fff;
			cursor: pointer;
			margin: 10px auto;
			padding: 10px 20px;
			color: #777;

			&:hover {
				color: #333;
			}
		}

		ul.sidebar-friend-list {
			margin: 0;
			overflow-y: scroll;
			color: #fff;
			background: #8d8d8d;
			box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.5);

			&::-webkit-scrollbar {
				width: 5px;
			}

			&::-webkit-scrollbar-track {
				background: #f1f1f1;
			}

			&::-webkit-scrollbar-thumb {
				background: #777;
				border-radius: 5px;
			}

			li.sidebar-friend {
				padding: 20px;
				display: flex;
				align-items: center;
				box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
				font-size: 14px;
				font-weight: 300;

				.sidebar-friend-img {
					width: 32px;
					height: 32px;
					border-radius: 50%;
					object-fit: cover;
					margin-right: 10px;
				}
			}
		}
	}
`;

export default Sidebar;
