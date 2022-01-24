import React from "react";

const Carousel = () => {
	return (
		<div id="carousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="/img/slide01.svg" class="d-block w-100" alt="slide image" />
				</div>
				<div className="carousel-item">
					<img src="/img/slide01.svg" class="d-block w-100" alt="slide image" />
				</div>
				<div className="carousel-item">
					<img src="/img/slide01.svg" class="d-block w-100" alt="slide image" />
				</div>
			</div>

			{/* buttons */}
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carousel"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carousel"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
