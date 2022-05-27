import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const Chart = ({ title, grid, data, dataKey }) => {
	return (
		<ChartContainer>
			<h3 className="chart-title">{title}</h3>

			<ResponsiveContainer width={"100%"} aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey={"name"} stroke={"#777"} />
					{/* <YAxis /> */}
					<Line type={"monotone"} dataKey={dataKey} stroke="#777" />
					<Tooltip />
					{grid && <CartesianGrid stroke="#dedede" strokeDasharray={"5 5"} />}
				</LineChart>
			</ResponsiveContainer>
		</ChartContainer>
	);
};

const ChartContainer = styled.section`
	margin: 20px;
	padding: 20px;
	box-shadow: var(--box-shadow);

	.chart-title {
		margin-bottom: 20px;
	}
`;

export default Chart;
