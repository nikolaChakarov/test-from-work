import React from "react";
import "./DownloadBtn.scss";

const DownloadBtn = () => {
	return (
		<div className="bttn-wrapper">
			<label>Download your file</label>
			<div className="input-hidden">
				<input name="input-download" type="file" id="input-download" hidden />
				<label htmlFor="input-download" id="label-custom">
					<span>Choose a file</span>
					<img src="/img/download-icon.svg" alt="download icon" />
				</label>
			</div>
		</div>

		// <div className="wrapper">
		// 	<div className="button bttn-wrapper">
		// 		<span>Choose a file</span>
		// 		<img src="/img/download-icon.svg" alt="download icon" />
		// 	</div>
		// </div>
	);
};

export default DownloadBtn;
