import React from "react";
import styled from "styled-components";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
	return (
		<FeaturedContainer>
			<div className="featured-item">
				<span className="featured-title">Revanue</span>
				<div className="featured-money-container">
					<span className="featured-money">$2,415</span>
					<span className="featured-money-rate">
						$-11.4 <ArrowDownward className="featured-icon negative" />
					</span>
				</div>
				<span className="featured-sub">Compare to last month</span>
			</div>

			<div className="featured-item">
				<span className="featured-title">Sales</span>
				<div className="featured-money-container">
					<span className="featured-money">$4,415</span>
					<span className="featured-money-rate">
						$-11.4 <ArrowDownward className="featured-icon negative" />
					</span>
				</div>
				<span className="featured-sub">Compare to last month</span>
			</div>

			<div className="featured-item">
				<span className="featured-title">Cost</span>
				<div className="featured-money-container">
					<span className="featured-money">$2,415</span>
					<span className="featured-money-rate">
						$+2.4 <ArrowUpward className="featured-icon positive" />
					</span>
				</div>
				<span className="featured-sub">Compare to last month</span>
			</div>
		</FeaturedContainer>
	);
};

const FeaturedContainer = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	.featured-item {
		flex: 1;
		margin: 0 20px;
		padding: 30px;
		box-shadow: var(--box-shadow);
		cursor: pointer;

		.featured-title {
			font-size: 20px;
		}

		.featured-money-container {
			margin: 10px 0;
			display: flex;
			align-items: center;
		}

		.featured-money {
			font-size: 30px;
			font-weight: bold;
		}

		.featured-money-rate {
			display: flex;
			align-items: center;
			margin-left: 20px;
		}

		.featured-icon {
			font-size: 20px;
			margin-left: 5px;
			color: green;
		}

		.featured-icon.negative {
			color: red;
		}

		.featured-sub {
			font-size: 15px;
			color: gray;
		}
	}
`;

export default FeaturedInfo;
