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
				<li>
					<Link to={"/up-down"}>Download Upload</Link>
				</li>
				<li>
					<Link to={"/pdf"}>PDF</Link>
				</li>
				<li>
					<Link to={"/use-callback"}>CallBack</Link>
				</li>
				<li>
					<Link to={"/use-memo"}>Memo</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
