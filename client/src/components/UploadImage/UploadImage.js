import React, { useState } from "react";

const UploadImage = () => {
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);

	const fileSelected = (e) => {
		setFile(e.target.files[0]);
	};

	async function postImage({ image, description }) {
		const formData = new FormData();
		formData.append("image", image);
		formData.append("description", description);

		const result = await fetch("http://localhost:7007/images", {
			method: "POST",
			// headers: {
			// 	"Content-Type": "multipart/form-data",
			// },
			body: JSON.stringify(formData),
		});

		console.log(result, "post image");

		return result.data;
	}

	const onFormSubmit = async (event) => {
		event.preventDefault();
		const result = await postImage({ image: file, description });

		console.log(result, "on form submit");
	};

	// const onFormSubmit = async (e) => {
	// 	e.preventDefault();

	// 	const dbResult = await postImage({ image: file, description });

	// 	console.log(dbResult, "database result");
	// };

	// async function postImage({ image, description }) {
	// 	const formData = new FormData();
	// 	formData.append("image", image);
	// 	formData.append("description", description);

	// 	const result = await axios.post("http//localhost:7007/imgs", formData, {
	// 		headers: { "Content-Type": "multipart/form-data" },
	// 	});

	// 	console.log(result, "post image function");
	// }

	return (
		<div className="container-fluid" id="upload-image">
			<form onSubmit={onFormSubmit}>
				<label>
					<p>Upload</p>
					<input onChange={fileSelected} type="file" accept="image/*" />
				</label>
				<br />
				<label>
					<p>Description</p>
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<br />
				<button className="btn bttn-custom">Send</button>
			</form>
		</div>
	);
};

export default UploadImage;
