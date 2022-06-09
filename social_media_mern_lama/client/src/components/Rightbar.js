import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";

const Rightbar = ({ profile, user }) => {
	const { users, getAllUsers } = useContext(GlobalContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		getAllUsers();
	}, []);

	const HomeRightbar = () => (
		<div className="home-rightbar">
			<div className="birthday-container">
				<img className="birthday-image" src="/assets/gift.png" alt="" />
				<span className="birthday-text">
					<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
				</span>
			</div>

			<img className="rightbar-ad" src="/assets/ad.png" alt="" />

			<h4 className="rightbar-title">Online Friends</h4>

			<ul className="rightbar-friends-list">
				{users.map((user, i) => (
					<li key={i} className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src={PF + user?.profilePicture}
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">{user?.username}</span>
					</li>
				))}
			</ul>
		</div>
	);

	const ProfileRightbar = () => (
		<div className="profile-rightbar">
			<h4 className="rightbar-title">User information</h4>
			<div className="rightbar-info">
				<div className="rightbar-info-item">
					<span className="rightbar-info-key">City:</span>
					<span className="rightbar-info-value">{user?.city}</span>
				</div>

				<div className="rightbar-info-item">
					<span className="rightbar-info-key">From:</span>
					<span className="rightbar-info-value">{user?.from}</span>
				</div>

				<div className="rightbar-info-item">
					<span className="rightbar-info-key">Relationship:</span>
					<span className="rightbar-info-value">{user?.relationship}</span>
				</div>
			</div>
			<h4 className="rightbar-title">User friends</h4>

			<div className="rightbar-followings">
				<div className="rightbar-following">
					<img
						className="rightbar-following-img"
						src={PF + "person/1.jpeg"}
						alt=""
					/>
					<span className="rightbar-following-name">John Carter</span>
				</div>
				<div className="rightbar-following">
					<img
						className="rightbar-following-img"
						src={PF + "person/2.jpeg"}
						alt=""
					/>
					<span className="rightbar-following-name">John Carter</span>
				</div>
				<div className="rightbar-following">
					<img
						className="rightbar-following-img"
						src={PF + "person/3.jpeg"}
						alt=""
					/>
					<span className="rightbar-following-name">John Carter</span>
				</div>
				<div className="rightbar-following">
					<img
						className="rightbar-following-img"
						src={PF + "person/4.jpeg"}
						alt=""
					/>
					<span className="rightbar-following-name">John Carter</span>
				</div>
				<div className="rightbar-following">
					<img
						className="rightbar-following-img"
						src={PF + "person/5.jpeg"}
						alt=""
					/>
					<span className="rightbar-following-name">John Carter</span>
				</div>
				<div className="rightbar-following">
					<img
						className="rightbar-following-img"
						src={PF + "person/6.jpeg"}
						alt=""
					/>
					<span className="rightbar-following-name">John Carter</span>
				</div>
			</div>
		</div>
	);

	return (
		<RightbarContainer>
			<div className="rightbar-wrapper">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</RightbarContainer>
	);
};

const RightbarContainer = styled.div`
	flex: 3.5;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	&::-webkit-scrollbar {
		display: none;
	}

	.rightbar-wrapper {
		padding: 20px 20px 0 0;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		&::-webkit-scrollbar {
			display: none;
		}

		.home-rightbar {
			overflow-y: scroll;
			display: flex;
			flex-direction: column;
			&::-webkit-scrollbar {
				display: none;
			}

			.birthday-container {
				display: flex;
				align-items: center;

				.birthday-image {
					width: 40px;
					height: 40px;
					object-fit: cover;
					margin-right: 10px;
				}

				.birthday-text {
					font-weight: 300;
					font-size: 15px;
					align-self: flex-end;
				}
			}

			.rightbar-ad {
				width: 100%;
				border-radius: 10px;
				margin: 30px 0;
			}

			.rightbar-title {
				margin-bottom: 20px;
			}

			.rightbar-friends-list {
				overflow-y: scroll;
				display: flex;
				flex-direction: column;

				&::-webkit-scrollbar {
					width: 2px;
				}

				&::-webkit-scrollbar-track {
					background: #f1f1f1;
				}

				&::-webkit-scrollbar-thumb {
					background: var(--main-color);
					border-radius: 5px;
				}
			}

			.rightbar-friend {
				display: flex;
				align-items: center;
				margin-bottom: 15px;

				.rightbar-profile-image-container {
					margin-right: 10px;
					position: relative;
					display: flex;

					.rightbar-profile-image {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						object-fit: cover;
					}

					.rightbar-online {
						width: 12px;
						height: 12px;
						border-radius: 50%;
						background-color: limegreen;
						position: absolute;
						top: -2px;
						right: 0;
						border: 2px solid #fff;
					}
				}

				.rightbar-username {
					font-weight: 500;
				}
			}
		}

		.profile-rightbar {
			.rightbar-title {
				font-size: 18px;
				font-weight: 500;
				margin-bottom: 10px;
			}

			.rightbar-info {
				margin-bottom: 30px;
			}

			.rightbar-info-item {
				margin-bottom: 10px;

				.rightbar-info-key {
					font-weight: 500;
					margin-right: 15px;
					color: #555;
				}

				.rightbar-info-key {
					font-weight: 300;
				}
			}

			.rightbar-followings {
				flex-wrap: wrap;
				display: flex;
				justify-content: space-between;
			}

			.rightbar-following {
				display: flex;
				flex-direction: column;
				margin-bottom: 20px;
				align-items: center;
				cursor: pointer;
			}

			.rightbar-following-img {
				width: 100px;
				height: 100px;
				object-fit: cover;
				border-radius: 5px;
				margin-bottom: 5px;
			}
		}
	}
`;

export default Rightbar;
