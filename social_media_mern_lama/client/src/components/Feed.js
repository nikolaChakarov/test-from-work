import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
import Post from "./Post";
import Share from "./Share";

import { useNavigate } from "react-router-dom";

const Feed = () => {
	const navigate = useNavigate();
	const { posts, getAllPosts, user } = useContext(GlobalContext);

	useEffect(() => {
		if (!user) {
			navigate("/register");
			return;
		}

		getAllPosts(user.userId);
	}, [user]);

	return (
		<FeedContainer>
			<div className="feed-wrapper">
				<Share />
				<div className="feed-posts-wrapper">
					{posts.map((data, i) => (
						<Post key={i} {...data} />
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
