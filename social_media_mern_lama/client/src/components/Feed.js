import styled from "styled-components";
import Post from "./Post";
import Share from "./Share";

const Feed = () => {
	return (
		<FeedContainer>
			<div className="feed-wrapper">
				<Share />
				<div className="feed-posts-wrapper">
					<Post />
					<Post />
					<Post />
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
