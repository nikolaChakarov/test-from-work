import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";

const Post = ({ post }) => {
	const navigate = useNavigate();

	const { user } = useContext(GlobalContext);

	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const { likes, date, desc, img } = post;

	const [userPost, setUserPost] = useState({});
	const [liked, setLiked] = useState({
		click: false,
		number: likes.length,
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
		if (!user) {
			navigate("/register");
			return;
		}
		const fetchUser = async () => {
			let res = await (
				await fetch(`http://localhost:5005/api/users?userId=${post.userId}`, {
					headers: {
						"x-auth-token": user.token,
					},
				})
			).json();

			setUserPost(res.user);
		};
		fetchUser();
	}, [post.userId]);

	return (
		<PostContainer>
			<div className="post-wrapper">
				<div className="post-top">
					<div className="post-top-left">
						<Link to={`/profile/${userPost.username}`}>
							<img
								className="post-profile-image"
								src={
									userPost.profilePicture !== ""
										? PF + userPost.profilePicture
										: PF + "person/noAvatar.png"
								}
								alt=""
							/>
						</Link>

						<span className="post-user-name">{userPost.username}</span>
						<span className="post-date">
							{dayjs(date).format("DD/MM/YYYY")}
						</span>
					</div>
					<div className="post-top-right">
						<MoreVert />
					</div>
				</div>
				<div className="post-center">
					<span className="post-text">{desc}</span>
					<img className="post-image" src={PF + img} alt="" />
				</div>
				<div className="post-bottom">
					<div className="post-bottom-left">
						<img
							className="like-icon"
							src={PF + "like.png"}
							alt=""
							onClick={likeHandler}
						/>
						<img
							className="like-icon"
							src={PF + "heart.png"}
							alt=""
							onClick={likeHandler}
						/>
						<span className="post-like-counter">
							{liked.number} people like it
						</span>
					</div>
					<div className="post-bottom-right">
						<span className="post-comment-text"> comments</span>
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
