import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="container-fluid" id="nav">
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/form"}>Form</Link>
				</li>
				<li>
					<Link to={"/layout-01"}>Layout01</Link>
				</li>
				<li>
					<Link to={"/layout02"}>Layout02</Link>
				</li>

				<li>
					<Link to={"/flex-box"}>Flex Box</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
