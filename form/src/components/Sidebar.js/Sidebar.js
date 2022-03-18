import React, { useState } from "react";
import "./Sidebar.scss";

import Nav from "../Nav";

const Sidebar = () => {
	const [click, setClick] = useState(false);

	return (
		<div
			className="container-fluid"
			id="side-bar"
			style={{
				maxWidth: click ? "30rem" : "",
			}}
		>
			<Nav />

			<div className="slide-control" onClick={() => setClick(!click)}></div>
		</div>
	);
};

export default Sidebar;
