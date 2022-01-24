import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="container-fluid" id="nav-app">
			<ul>
				<li>
					<Link to={"/page-one"}>page one</Link>
				</li>
				<li>
					<Link to={"/radio-form"}>radio form</Link>
				</li>
				<li>
					<Link to={"/calendar"}>calendar</Link>
				</li>
				<li>
					<Link to={"/input-bttn"}>Input With Button Inside</Link>
				</li>
				<li>
					<Link to={"/diff-number-cols"}>Different columns</Link>
				</li>
				<li>
					<Link to={"/image-upload"}>Image Upload</Link>
				</li>
				<li>
					<Link to={"/google-map"}>Google Map</Link>
				</li>
				<li>
					<Link to={"/svg-icon"}>SVG Icon</Link>
				</li>
				<li>
					<Link to={"/select"}>Select</Link>
				</li>
				<li>
					<Link to={"/download"}>Download</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
