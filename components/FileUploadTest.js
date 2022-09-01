import React, { useState } from "react";

const FileUploadTest = () => {
	const [image, setImage] = useState(null);
	const [imgURL, setImgURL] = useState(null);

	const change = (event) => {
		if (event.target.files && event.target.files[0]) {
			const img = event.target.files[0];
			setImage(img);
			setImgURL(URL.createObjectURL(img));
		}
	};

	const submitImage = async (e) => {
		e.preventDefault();
		const body = new FormData();
		body.append("file", image);
		const res = await fetch("api/file", {
			method: "POST",
			body,
		});
		console.log(res);
	};

	return (
		<div>
			<form onSubmit={submitImage}>
				<input type="file" name="image" onChange={change} />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default FileUploadTest;
