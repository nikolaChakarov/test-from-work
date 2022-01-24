import { useState } from "react";

import "./Animation.scss";

const Animation = () => {
	const [click, setClick] = useState(false);

	return (
		<div className="container-fluid" id="animation">
			<div
				className="anim-set"
				style={{
					display: !click ? "none" : "block",
				}}
			>
				<h1>Text To Animate</h1>
			</div>

			<button className="btn btn-dark" onClick={() => setClick(!click)}>
				Click...
			</button>
		</div>
	);
};

export default Animation;
