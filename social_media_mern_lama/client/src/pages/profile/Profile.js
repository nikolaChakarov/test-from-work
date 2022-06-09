import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

const Profile = () => {
	// const { setProfileUser, profileUser } = useContext(GlobalContext);

	const params = useParams();

	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	// useEffect(() => {
	// 	setProfileUser(params.username);
	// }, [profileUser]);

	return (
		<ProfileContainer>
			<Topbar />
			<div className="profile-inner">
				<Sidebar />
				<div className="profile-right">
					<div className="profile-right-top">
						<div className="profile-cover">
							<img
								className="profile-cover-image"
								src={PF + "post/3.jpeg"}
								alt=""
							/>
							<img
								className="profile-user-image"
								src={PF + "person/1.jpeg"}
								alt=""
							/>
						</div>
						<div className="profile-info">
							{/* <h4 className="profile-info-name">{profileUser?.username}</h4>
							<span className="profile-info-desc">{profileUser?.desc}</span> */}
						</div>
					</div>

					<div className="profile-right-bottom">
						<Feed username="mario" />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</ProfileContainer>
	);
};

const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	*::-webkit-scrollbar {
		display: none;
	}

	.profile-inner {
		display: flex;
		overflow-y: scroll;
		flex: 1;
	}

	.profile-right {
		flex: 9;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		.profile-right-top {
			.profile-cover {
				height: 320px;
				position: relative;
			}

			.profile-cover-image {
				width: 100%;
				height: 250px;
				object-fit: cover;
			}

			.profile-user-image {
				width: 150px;
				height: 150px;
				border-radius: 50%;
				object-fit: cover;
				position: absolute;
				top: 150px;
				left: 0;
				right: 0;
				margin: auto;
				border: 3px solid #fff;
			}

			.profile-info {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			.profile-info-name {
				font-size: 24px;
			}

			.profile-info-desc {
				font-weight: 300;
			}
		}

		.profile-right-bottom {
			display: flex;
		}
	}
`;

export default Profile;
