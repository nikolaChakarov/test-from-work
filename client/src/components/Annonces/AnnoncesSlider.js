import React from "react";
import "./AnnoncesSlider.scss";

const AnnoncesSlider = () => {
	return (
		<div className="container-fluid" id="annoncesSlider">
			{/* this component shold have 1 row with 2 cols -> 1 for the slider, 1 for the description */}
			<div className="row d-flex">
				{/* col slider */}
				<div className="col col-md-6 col-12 annonces-slider">
					{/* bootstrap carousel */}
					<div
						id="carouselExampleSlidesOnly"
						className="carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									className="img-fluid"
									src="/img/slider/01.jpg"
									className="d-block w-100"
									alt="img1"
								/>
							</div>
							<div className="carousel-item">
								<img
									className="img-fluid"
									src="/img/slider/02.jpg"
									className="d-block w-100"
									alt="img2"
								/>
							</div>
							<div className="carousel-item">
								<img
									className="img-fluid"
									src="/img/slider/03.jpg"
									className="d-block w-100"
									alt="img3"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* col description */}
				<div className="col col-md-6 col-12">
					<h1>Appartement</h1>
				</div>
			</div>
		</div>
	);
};

export default AnnoncesSlider;
