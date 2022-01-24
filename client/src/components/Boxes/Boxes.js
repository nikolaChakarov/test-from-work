import React from "react";
import "./Boxes.scss";

const Boxes = () => {
	return (
		<div className="boxes-wrapper">
			<div className="boxes-bttns order-md-1 order-2">
				<p>button 1</p>
				<p>button 2</p>
				<p>button 3</p>
			</div>

			<div className="boxes-current order-md-2 order-1">
				<div className="current-header">header</div>
				<div className="current-body">
					{new Array(30).fill("").map((el, i) => {
						return <p>{i + 1}</p>;
					})}
				</div>
				<div className="current-paginate">paginate</div>
			</div>
		</div>
	);
};

export default Boxes;
