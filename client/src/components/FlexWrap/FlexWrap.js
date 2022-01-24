import React from "react";
import "./FlexWrap.scss";

const data = new Array(8).fill("");

const FlexWrap = () => {
	return (
		<div className="container-fluid" id="flex-wrap-el">
			<div className="list">
				{data.map((el, i) => {
					return (
						<div key={i} className="item">
							{i + 1}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FlexWrap;
