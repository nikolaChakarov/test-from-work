import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";

const Post = (props) => {
	const { desc, photo, date, userId } = props;

	const { getUser, user } = useContext(GlobalContext);

	useEffect(() => {
		getUser(userId);
	}, []);

	console.log(user);

	return (
		<div
			style={{
				border: "1px dashed",
				paddign: "5px",
				margin: "5px",
			}}
		>
			<p>{desc}</p>
			<p>{photo}</p>
			<p>{date}</p>
			<p>userId: {userId}</p>
		</div>
	);
};

export default Post;
