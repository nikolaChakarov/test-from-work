import React, { useState } from "react";
import "./BootstrapNavbar.scss";

import { useWidth } from "../../utils/hooks";

const BootstrapNavbar = () => {
	const viewportWidth = useWidth();

	const [menuClick, setMenuClick] = useState(false);

	return (
		<div className="container-fluid" id="bootstrap-navbar">
			{/* navigation */}
			<nav className="navbar navbar-expand-lg navbar-light  navbar-custom">
				{/* logo */}
				<a className="navbar-brand" href="#">
					<img src="/img/logo-white.svg" alt="logo icon" />
				</a>

				{/* mobile wrapper */}
				<div
					className="mobile-wrapper"
					style={{
						width: !menuClick ? "" : viewportWidth > 576 ? "auto" : "85%",
						height: !menuClick && viewportWidth <= 576 ? "7rem" : "",
					}}
				>
					{/* hamburger button */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setMenuClick(!menuClick)}
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* mobile collapse */}
					<div
						className="collapse navbar-collapse"
						id="navbarNav"
						style={{
							display: menuClick ? "block" : "",
						}}
					>
						{/* links */}
						<ul className="navbar-nav">
							<li className="nav-item active order-md-1 order-2">
								<a className="nav-link" href="#">
									Propriétaire
								</a>
							</li>
							<li className="nav-item order-md-1 order-2">
								<a className="nav-link" href="#">
									Négociateur
								</a>
							</li>
							<li className="nav-item order-md-1 order-2">
								<a className="nav-link" href="#">
									Accompagnateur
								</a>
							</li>
							<li className="nav-item order-md-2 order-1 user-info">
								<p>user name</p>
								<div className="user-img"></div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default BootstrapNavbar;
