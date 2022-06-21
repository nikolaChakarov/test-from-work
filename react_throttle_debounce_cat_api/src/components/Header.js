import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderEl>
			<h5>debounce and throttle</h5>

			<ul>
				<li>
					<Link to={"/debounce"}>debounce</Link>
				</li>
				<li>
					<Link to={"/throttle"}>throttle</Link>
				</li>
			</ul>
		</HeaderEl>
	);
};

const HeaderEl = styled.div`
	padding: 10px;
	border-bottom: 1px solid;
	display: flex;
	justify-content: space-between;
`;

export default Header;
