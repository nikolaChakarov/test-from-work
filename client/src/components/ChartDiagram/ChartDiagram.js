import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./ChartDiagram.scss";

const ChartDiagram = () => {
	const [state, setState] = useState({
		options: {
			colors: ["#850000", "#dedede"],
			chart: {
				id: "apexchart-example",
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
			},
		},
		series: [
			{
				name: "series-1",
				data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
			},
			{
				name: "series-2",
				data: [3, 4, 35, 50, 49, 60, 70, 91, 15],
			},
		],
	});

	return (
		<div className="container-fluid" id="chart">
			<Chart
				options={state.options}
				series={state.series}
				type="bar"
				width={500}
				height={320}
			/>

			<Chart
				options={state.options}
				series={state.series}
				type="line"
				width={500}
				height={320}
			/>

			<Chart
				options={state.options}
				series={state.series}
				type="area"
				width={500}
				height={320}
			/>
			<Chart
				options={state.options}
				series={state.series}
				type="radar"
				width={500}
				height={320}
			/>
			<Chart
				options={state.options}
				series={state.series}
				type="histogram"
				width={500}
				height={320}
			/>
			<Chart
				options={state.options}
				series={state.series}
				type="scatter"
				width={500}
				height={320}
			/>
			<Chart
				options={state.options}
				series={state.series}
				type="heatmap"
				width={500}
				height={320}
			/>
		</div>
	);
};

export default ChartDiagram;
