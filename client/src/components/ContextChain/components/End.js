import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChainContext } from "../context/ChainState";

const End = () => {
	const history = useHistory();

	const { state } = useContext(ChainContext);

	return (
		<div className="container-fluid" id="page-end">
			<h1>Page...end</h1>
			<button className="btn bttn-custom">send data</button>

			<div className="paginate-bttns">
				<button
					onClick={() => history.push("/page-three")}
					className="btn bttn-custom bttn-prev"
				>
					Prev
				</button>

				<button
					onClick={() => {
						console.log(state, "THE STATE...");
					}}
					className="btn bttn-custom bttn-end"
				>
					END...
				</button>
			</div>
		</div>
	);
};

export default End;
