import React from "react";
import "./OverFlowX.scss";

import HorizontalScroll from "react-scroll-horizontal";

const OverFlowX = () => {
	// const child = { width: `100em`, height: `100%` };

	return (
		<div className="conatainer-fluid" id="over">
			<h1>NO XXXX SCROLL BARRRRRRRRRRRRRRR</h1>

			<div className="row">
				<div className="col col-md-2 first-col">first col</div>
				<div className="col col-md-5 second-col">
					<HorizontalScroll>
						{new Array(10).fill("").map((el, i) => {
							return (
								<div key={i} className="box">
									{i}
								</div>
							);
						})}
					</HorizontalScroll>
				</div>
			</div>

			{/* <div className="test">
				<HorizontalScroll>
					{new Array(10).fill("").map((el, i) => {
						return (
							<div key={i} className="box">
								{i}
							</div>
						);
					})}
				</HorizontalScroll>
			</div> */}
		</div>
	);
};

export default OverFlowX;
