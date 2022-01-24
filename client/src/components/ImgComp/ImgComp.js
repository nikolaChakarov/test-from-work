const ImgComp = () => {
	return (
		<div className="container-fluid">
			<h1>Image from public directory</h1>

			<div
				className="test"
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: "red",
					background: `url(${process.env.PUBLIC_URL + "/img/card/2.png"})`,
				}}
			></div>
		</div>
	);
};

export default ImgComp;
