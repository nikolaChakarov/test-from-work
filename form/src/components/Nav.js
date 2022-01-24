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
			</ul>
		</div>
	);
};

export default Nav;
