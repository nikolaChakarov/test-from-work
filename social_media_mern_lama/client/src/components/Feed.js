import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
import Post from "./Post";
import Share from "./Share";

import { useNavigate } from "react-router-dom";

const Feed = ({ username }) => {
	const navigate = useNavigate();
	const { user } = useContext(GlobalContext);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			if (!user) {
				navigate("/register");
				return;
			}

			let res = username
				? await (
					await fetch(`http://localhost:5005/api/posts/profile/${username}`, {
						headers: {
							"x-auth-token": user.token,
						},
					})
				).json()
				: await (
					await fetch(
						`http://localhost:5005/api/posts/timeline/${user.userId}`,
						{
							headers: {
								"x-auth-token": user.token,
							},
						}
					)
				).json();

			setPosts(res);
		};
		fetchPosts();
	}, [username]);

	return (
		<FeedContainer>
			<div className="feed-wrapper">
				<Share />
				<div className="feed-posts-wrapper">
					{posts.map((data, i) => (
						<Post key={i} post={data} />
					))}
				</div>
			</div>
		</FeedContainer>
	);
};

const FeedContainer = styled.div`
	flex: 5.5;
	display: flex;
	flex-direction: column;

	* ::-webkit-scrollbar,
	& ::-webkit-scrollbar {
		display: none;
	}

	.feed-wrapper {
		display: flex;
		flex-direction: column;
		padding: 20px;
		overflow-y: scroll;

		.feed-posts-wrapper {
			overflow-y: scroll;
			padding: 0 10px;
		}
	}
`;

export default Feed;
