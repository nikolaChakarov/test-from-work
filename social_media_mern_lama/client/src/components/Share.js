import styled from "styled-components";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

import React from "react";

const Share = () => {
	return (
		<ShareContainer>
			<div className="share-wrapper">
				<div className="share-top">
					<img
						src="/assets/person/1.jpeg"
						alt=""
						className="share-profile-img"
					/>
					<input
						type="text"
						className="share-input"
						placeholder="What's in your mind"
					/>
				</div>

				<hr className="share-hr" />

				<div className="share-bottom">
					<div className="share-options">
						<div className="share-option">
							<PermMedia htmlColor="tomato" className="share-icon" />
							<span className="share-option-text">Photo or Video</span>
						</div>

						<div className="share-option">
							<Label htmlColor="#00789a" className="share-icon" />
							<span className="share-option-text">Tag</span>
						</div>

						<div className="share-option">
							<Room htmlColor="#45a45e" className="share-icon" />
							<span className="share-option-text">Location</span>
						</div>

						<div className="share-option">
							<EmojiEmotions htmlColor="#f7a837" className="share-icon" />
							<span className="share-option-text">Feelings</span>
						</div>
					</div>

					<button className="share-button">Share</button>
				</div>
			</div>
		</ShareContainer>
	);
};

const ShareContainer = styled.div`
	/* background: lightblue; */
	height: 170px;
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.65);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.65);

	.share-wrapper {
		padding: 10px;

		.share-top {
			display: flex;
			align-items: center;

			.share-profile-img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				object-fit: cover;
				margin-right: 10px;
			}

			.share-input {
				border: none;
				flex: 1;
				padding: 5px;
			}
		}

		.share-hr {
			margin: 20px;
			border: none;
			border-bottom: 1px groove #fff;
		}

		.share-bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20px;

			.share-options {
				flex: 1;
				display: flex;
			}

			.share-option {
				display: flex;
				align-items: center;
				margin-right: 15px;
				cursor: pointer;
			}

			.share-icon {
				margin-right: 5px;
			}

			.share-option-text {
				font-size: 14px;
				font-weight: 500;
			}

			.share-button {
				border: none;
				padding: 7px 14px;
				border-radius: 5px;
				font-weight: 500;
				cursor: pointer;
				background: #45a45e;
				color: #fff;
			}
		}
	}
`;

export default Share;
