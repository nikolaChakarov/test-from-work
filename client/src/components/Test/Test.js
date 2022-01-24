import React, { useState } from "react";

const Test = () => {
	const [click, setClick] = useState(false);
	return (
		<div className="container-fluid" id="test">
			<div className={`box ${click ? "clicked" : ""}`}>some text</div>
			<button onClick={() => setClick(!click)}>click</button>
		</div>
	);
};

export default Test;
