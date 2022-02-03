import React from "react";
import "./Overflow.scss";

const Overflow = () => {
	return (
		<div className="" id="overflow">
			<div className="inner">
				{new Array(100).fill("").map((el, i) => {
					return <p key={i}>{i}</p>;
				})}
			</div>
		</div>
	);
};

export default Overflow;
