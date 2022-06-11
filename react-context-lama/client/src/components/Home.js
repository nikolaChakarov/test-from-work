import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);

	const handleLogout = () => {
		dispatch({
			type: 'LOGOUT'
		});
	}

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	return <div>Home
		<button onClick={handleLogout}>Loggout</button>

	</div>;
};

export default Home;
