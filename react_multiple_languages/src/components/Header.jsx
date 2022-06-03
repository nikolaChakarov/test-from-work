import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header = () => {
	const { i18n, t } = useTranslation(["common"]);

	const handleLanguageChange = (e) => {
		const currentLanguage = e.target.value;

		i18n.changeLanguage(currentLanguage);
	};

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	return (
		<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to={"#"} className="navbar-brand">
				{t("logo")}
			</Link>
			<button className="navbar-toggler">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<select
							className="form-select"
							onChange={handleLanguageChange}
							value={localStorage.getItem("i18nextLng")}
						>
							<option value="en">EN</option>
							<option value="fr">FR</option>
							<option value="bg">BG</option>
						</select>
					</li>

					<li className="nav-item ml-2">
						<Link className="nav-link" to={"/"}>
							{t("home")}
						</Link>
					</li>

					<li className="nav-item ml-2">
						<Link className="nav-link" to={"/profile"}>
							{t("profile")}
						</Link>
					</li>
				</ul>
			</div>
		</Nav>
	);
};

const Nav = styled.nav``;

export default Header;
