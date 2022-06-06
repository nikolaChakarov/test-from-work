import React, { useEffect, useState } from "react";
// import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
import { MoreVert } from "@mui/icons-material";

import { Users } from "../dummyData";

const Post = ({ desc, photo, date, userId, like, comment }) => {
	// const { getUser, user, dispatch } = useContext(GlobalContext);

	// useEffect(() => {
	// 	// getUser(id);
	// 	console.log(id);
	// 	dispatch({
	// 		type: "USER",
	// 		payload: id,
	// 	});
	// }, []);
	// // console.log(id);
	// console.log(user);

	const [userCommented, setUserCommented] = useState({});
	const fetchUserCommented = (id) => {
		const current = Users.find((el) => el.id === id);
		setUserCommented(current);
	};

	const [liked, setLiked] = useState({
		click: false,
		number: like,
	});

	const likeHandler = (e) => {
		liked.click
			? setLiked((prev) => ({
					click: !prev.click,
					number: prev.number - 1,
			  }))
			: setLiked((prev) => ({
					click: !prev.click,
					number: prev.number + 1,
			  }));
	};

	useEffect(() => {
		fetchUserCommented(userId);
	}, []);

	return (
		<PostContainer>
			<div className="post-wrapper">
				<div className="post-top">
					<div className="post-top-left">
						<img
							className="post-profile-image"
							src={userCommented.profilePicture}
							alt=""
						/>
						<span className="post-user-name">{userCommented.username}</span>
						<span className="post-date">{date}</span>
					</div>
					<div className="post-top-right">
						<MoreVert />
					</div>
				</div>
				<div className="post-center">
					<span className="post-text">{desc}</span>
					<img className="post-image" src={photo} alt="" />
				</div>
				<div className="post-bottom">
					<div className="post-bottom-left">
						<img
							className="like-icon"
							src="/assets/like.png"
							alt=""
							onClick={likeHandler}
						/>
						<img
							className="like-icon"
							src="/assets/heart.png"
							alt=""
							onClick={likeHandler}
						/>
						<span className="post-like-counter">
							{liked.number} people like it
						</span>
					</div>
					<div className="post-bottom-right">
						<span className="post-comment-text">{comment} comments</span>
					</div>
				</div>
			</div>
		</PostContainer>
	);
};

const PostContainer = styled.div`
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.65);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.65);
	margin: 30px 0;

	.post-wrapper {
		padding: 10px;

		.post-top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.post-top-left {
				display: flex;
				align-items: center;

				.post-profile-image {
					width: 32px;
					height: 32px;
					border-radius: 50%;
					object-fit: cover;
				}

				.post-user-name {
					font-size: 15px;
					font-weight: 500;
					margin: 0 10px;
				}

				.post-date {
					font-size: 12px;
				}
			}
		}

		.post-center {
			margin: 20px 0;

			.post-image {
				width: 100%;
				margin-top: 20px;
				max-height: 500px;
				object-fit: contain;
			}
		}

		.post-bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.post-bottom-left {
				display: flex;
				align-items: center;

				.like-icon {
					width: 24px;
					height: 24px;
					margin-right: 5px;
					cursor: pointer;
				}

				.post-like-counter {
					font-size: 15px;
				}
			}

			.post-bottom-right {
				.post-comment-text {
					font-size: 15px;
					border-bottom: 1px dashed grey;
				}
			}
		}
	}
`;

export default Post;
