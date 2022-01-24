import React, { useState } from "react";
import { Link } from "react-router-dom";

const DownloadFunc = () => {
	const [file, setFile] = useState("");

	async function getUrl(e) {
		let filename = e.target.dataset.filename;

		try {
			const dbRes = await await fetch(
				`http://localhost:5005/getfile/${filename}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			window.location.href = dbRes.url;

			// console.log(dbRes.url);

			// if (dbRes) {
			// 	setFile(dbRes.url);
			// } else {
			// 	throw new Error("something went wrong...");
			// }
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="container-fluid" id="download-func">
			<Link
				onClick={getUrl}
				data-filename="test.txt"
				to={file}
				style={{ color: "#fff", fontWeight: "bold" }}
			>
				download
			</Link>
		</div>
	);
};

export default DownloadFunc;
