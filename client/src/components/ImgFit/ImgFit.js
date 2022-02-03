import React from "react";
import "./ImgFit.scss";

const ImgFit = () => {
	return (
		<div className="" id="img-fit">
			<h1>test</h1>
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="/img/elephants.jpg" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="/img/lioness.jpg" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="/img/annonce.png" className="d-block w-100" alt="..." />
					</div>
				</div>
			</div>

			{/* <div id="carousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="/img/slide01.svg"
							className="d-block w-100"
							alt="slide image"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="/img/slide01.svg"
							className="d-block w-100"
							alt="slide image"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="/img/slide01.svg"
							className="d-block w-100"
							alt="slide image"
						/>
					</div>
				</div>

				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carousel"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carousel"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div> */}
		</div>
	);
};

export default ImgFit;
