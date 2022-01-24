import { useState } from "react";
import "./MenuAside.scss";

const MenuAside = ({
	setAlertBttnClick,
	alertBttnClick,
	asideData,
	alerts,
}) => {
	return (
		<div className="container-fluid" id="menu-aside">
			{/* title */}
			<h2 className="row">XXX annonces</h2>
			{/* alerts; the same as in TopMenu.js; this row will be removed for mobile and placed in separate component due to the mobile menu order */}
			<div className="row alerts d-md-block d-none">
				<div
					className="bttn-alerts"
					onClick={() => setAlertBttnClick(!alertBttnClick)}
				>
					<h4>Alertes</h4>
					<img src="/img/arrow-down.svg" alt="arrow icon" />
				</div>
				{alertBttnClick ? (
					<div className="col">
						{alerts.map((el, i) => {
							return <p key={i}>{el}</p>;
						})}
					</div>
				) : null}
			</div>
			{/* buttons */}
			{asideData.map((el, i) => {
				return (
					<div key={i} className="featuresSet">
						{/* the structure should be row -> type; row -> 3 cols with buttons */}
						<div className="row feature-type">
							<h4>{el.type}</h4>
						</div>

						{/* buttons for current type -> 1 row; 3 cols for md and above; 4 cols mobile */}
						<div className="row row-cols-md-3 row-cols-4 d-flex feature-bttns">
							{el.elements.map((element, i) => {
								return (
									<div key={i} className="col">
										<div className="bttn-plus-set">
											<div className="bttn-plus"></div>
											{element}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MenuAside;
