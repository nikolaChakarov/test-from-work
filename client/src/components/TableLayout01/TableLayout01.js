import React from "react";
import "./TableLayout01.scss";

const TableLayout = () => {
	return (
		<div className="container-fluid" id="table-layout">
			<div className="flex-wrapper">
				<header>
					<ul className="ul-titles">
						{new Array(10).fill("").map((el, i) => {
							return (
								<li className="col li-title" key={i}>
									{i}
								</li>
							);
						})}
					</ul>
				</header>
				<div className="inner-body">
					<main>
						<div className="inner-wrapper">
							<div className="info">
								{new Array(30).fill([]).map((row, i) => {
									return (
										<div className="table-row" key={i}>
											{new Array(10).fill("").map((col, idx) => {
												return (
													<div className="col table-col" key={idx}>
														{`column ${idx + 1}`}
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default TableLayout;
