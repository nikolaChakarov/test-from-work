import React from "react";
import "./SvgIcon.scss";

import { ReactComponent as Icon } from "../../img/bell.svg";

const SvgIcon = () => {
	return (
		<div className="container-fluid" id="svg-icon">
			<div className="icon-wrapper">
				<Icon
					className="icon"
					style={{
						fill: "red",
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
		</div>
	);
};

export default SvgIcon;
