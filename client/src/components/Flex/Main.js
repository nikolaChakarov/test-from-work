import React from "react";

import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

import "./Flex.scss";

const Main = () => {
	return (
		<div className="container-fluid" id="main">
			<Top />
			<Middle />
			<Bottom />

			{/* <p id="top">tst</p>
			<p id="middle">tst</p>
			<p id="bottom">tst</p> */}
		</div>
	);
};

export default Main;
