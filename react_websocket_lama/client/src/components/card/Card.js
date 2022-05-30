import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./card.css";

import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";

const Card = ({ post }) => {
	const { user, socket } = useContext(GlobalContext);

	const [liked, setLiked] = useState(false);

	const handleNotification = (type) => {
		setLiked(true);

		socket.emit("sendNotification", {
			senderName: user,
			receiverName: post.username,
			type,
		});
	};

	return (
		<div className="card">
			<div className="info">
				<img src={post.userImg} alt="" className="userImg" />
				<span>{post.fullname}</span>
			</div>
			<img src={post.postImg} alt="" className="postImg" />

			<div className="interaction">
				<img
					src={liked ? HeartFilled : Heart}
					alt=""
					className="cardIcon"
					onClick={() => handleNotification(1)}
				/>
				<img
					src={Comment}
					alt=""
					className="cardIcon"
					onClick={() => handleNotification(2)}
				/>
				<img
					src={Share}
					alt=""
					className="cardIcon"
					onClick={() => handleNotification(3)}
				/>
				<img src={Info} alt="" className="cardIcon infoIcon" />
			</div>
		</div>
	);
};

export default Card;
