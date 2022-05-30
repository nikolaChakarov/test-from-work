import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./navbar.css";

import { Notifications, Message, Settings } from "@mui/icons-material";

const Navbar = () => {
	const { user, socket } = useContext(GlobalContext);
	const [notifications, setNotifications] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		socket?.on("getNotif", (data) => {
			setNotifications((prev) => [...prev, data]);
		});
	}, [socket]);

	const displayNotifications = (data, id) => {
		let action;
		const { senderName, type } = data;

		if (type === 1) {
			action = "liked";
		} else if (type === 2) {
			action = "commented";
		} else {
			action = "shared";
		}

		return (
			<span
				key={id}
				className="notification"
			>{`${senderName} ${action} your post`}</span>
		);
	};

	const handleRead = () => {
		setNotifications([]);
		setOpen(false);
	};

	return (
		<div className="navbar">
			<span className="logo">chat app</span>

			<div className="icons">
				<div className="icon" onClick={() => setOpen(!open)}>
					<Notifications />
					<div className="counter">{notifications.length}</div>
				</div>

				<div className="icon" onClick={() => setOpen(!open)}>
					<Message />
				</div>

				<div className="icon" onClick={() => setOpen(!open)}>
					<Settings />
				</div>
			</div>

			{open && (
				<div className="notifications">
					{notifications.map((n, i) => displayNotifications(n, i))}
					<button className="notif-bttn" onClick={handleRead}>
						Mark as read
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
