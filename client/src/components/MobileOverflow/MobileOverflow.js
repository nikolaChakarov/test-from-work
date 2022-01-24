import React, { useState } from "react";
import "./MobileOverflow.scss";

const MobileOverflow = () => {
	const [num, setNum] = useState(1);

	const data = [...new Array(20).fill("")];
	return (
		<div className="container-fluid" id="mobile-overflow">
			<div className="row">
				<div className="col">inputs...</div>
			</div>

			<div className="row row-body">
				<h1>Title...</h1>
				<ul>
					{data.map((el, i) => {
						return (
							<li key={i}>
								{new Array(50).fill("").map((el, i) => {
									return <p key={i}>{i + 1 + " "}</p>;
								})}
							</li>
						);
					})}
				</ul>
			</div>

			<div className="footer-mobile">footer...</div>
		</div>
	);
};

export default MobileOverflow;
