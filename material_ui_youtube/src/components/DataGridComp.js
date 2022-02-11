import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const DataGridComp = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		let res = await axios.get("https://www.balldontlie.io/api/v1/teams");

		setData([...res.data.data]);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{ field: "city", headerName: "City", width: 150 },
		{ field: "abbreviation", headerName: "Abbreviations", width: 150 },
		{ field: "conference", headerName: "Conference", width: 150 },
		{ field: "division", headerName: "Division", width: 150 },
	];

	const rows = data.map((row) => {
		return {
			id: row.id,
			city: row.city,
			abbreviation: row.abbreviation,
			conference: row.conference,
			division: row.division,
		};
	});

	useEffect(() => {
		getData();
	}, []);

	return (
		<div style={{ height: 500, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
			/>
		</div>
	);
};

export default DataGridComp;
