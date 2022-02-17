import React from "react";
import "./TableLayout02.scss";

const TableLayout02 = () => {
	return (
		<div className="contaier-fluid" id="table-layout02">
			<div className="flex-wrapper">
				<ul className="ul-titles">
					{new Array(10).fill("").map((el, i) => {
						return (
							<li className="col li-title" key={i}>
								{i}
							</li>
						);
					})}
				</ul>

				<div className="inner-body">
					<div className="inner-body-wrapper">
						<div className="custom-table">
							{/* table slider */}
							<ul className="ul-table-titles">
								{new Array(25).fill("").map((el, i) => {
									return (
										<li className="li-table-title" key={i}>
											{`title ${i + 1}`}
										</li>
									);
								})}
							</ul>
							{/* table body */}
							<div className="table-body">
								<div className="inner-table-body-wrapper">
									{new Array(10).fill([]).map((row, i) => {
										return (
											<div className="custom-row" key={i}>
												{new Array(30).fill("").map((col, idx) => {
													return (
														<div
															className="custom-cell"
															key={idx}
														>{`data in cell ${idx + 1} in row ${i + 1}`}</div>
													);
												})}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableLayout02;
