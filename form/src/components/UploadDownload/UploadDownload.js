import React, { useState } from "react";
import "./UploadDownload.scss";
import { Link } from "react-router-dom";

const UploadDownload = () => {
	const [downloadFile, setDownloadFile] = useState("");
	const [uploadFile, setUploadFile] = useState(null);

	const fileSelected = (e) => {
		setUploadFile(e.target.files[0]);
	};

	async function getUrl(e) {
		const filename = e.target.dataset.filename;

		try {
			const dbRes = await fetch(`http://localhost:5005/getfile/${filename}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			window.location.href = dbRes.url;
		} catch (err) {
			console.log(err);
		}
	}

	async function onUploadFile() {
		console.log(uploadFile);
	}

	const onFormSubmit = (e) => {
		e.preventDefault();

		onUploadFile();
	};

	return (
		<div className="container-fluid" id="upload-download">
			<Link
				to={downloadFile}
				onClick={getUrl}
				data-filename="comission"
				style={{ color: "#fff", fontWeight: "bold" }}
			>
				download
			</Link>

			<form onSubmit={onFormSubmit}>
				<label>
					<p>Upload</p>
					<input onChange={fileSelected} type="file" />
				</label>

				<button>Send</button>
			</form>
		</div>
	);
};

export default UploadDownload;
