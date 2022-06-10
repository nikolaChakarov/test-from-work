import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalState";

const Post = (props) => {
	const { desc, photo, date, userId } = props;

	const { getUsersComments, usersComments } = useContext(GlobalContext);

	const [comment, setComment] = useState([]);

	useEffect(() => {
		getUsersComments()
	}, []);

	useEffect(() => {
		const currentComment = usersComments.find(el => el.id === userId);
		setComment(currentComment)
	}, [usersComments]);

	console.log(comment);

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
