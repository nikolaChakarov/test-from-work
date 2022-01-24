import React from "react";

const MobileSearch = ({ setAlertBttnClick, alertBttnClick, alerts }) => {
	return (
		<div className="container-fluid">
			{/*alerts col; search icons col; */}
			<div className="row">
				{/* col alerts */}
				<div className="col">
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

				{/* col search bttns */}
				<div className="col">
					<div className="search">
						<img
							className="img-fluid"
							src="/img/search.svg"
							alt="search icon"
						/>
					</div>
					<div className="bell">
						<img className="img-fluid" src="/img/bell.svg" alt="bell icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileSearch;
