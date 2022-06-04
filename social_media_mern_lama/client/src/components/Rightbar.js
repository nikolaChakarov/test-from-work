import styled from "styled-components";

const Rightbar = () => {
	return (
		<RightbarContainer>
			<div className="rightbar-wrapper">
				<div className="birthday-container">
					<img className="birthday-image" src="/assets/gift.png" alt="" />
					<span className="birthday-text">
						<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>

				<img className="rightbar-ad" src="/assets/ad.png" alt="" />

				<h4 className="rightbar-title">Online Friends</h4>

				<ul className="rightbar-friends-list">
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
					<li className="rightbar-friend">
						<div className="rightbar-profile-image-container">
							<img
								className="rightbar-profile-image"
								src="/assets/person/3.jpeg"
								alt=""
							/>
							<span className="rightbar-online"></span>
						</div>

						<span className="rightbar-username">John Carter</span>
					</li>
				</ul>
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
`;

export default Rightbar;
