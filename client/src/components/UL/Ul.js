import React from "react";
import "./Ul.scss";

const Ul = () => {
	return (
		<div className="conainer-fluid" id="ul-custom">
			<ol>
				<li>
					<div>
						one
						<ul className="level-two">
							<li>xxx</li>
							<li>xxx</li>
							<li>xxx</li>
						</ul>
					</div>
				</li>
				<li>two</li>
				<li>three</li>
			</ol>
		</div>
	);
};

export default Ul;
