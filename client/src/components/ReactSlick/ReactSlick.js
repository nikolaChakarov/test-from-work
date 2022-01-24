import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<h2> Multiple items </h2>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
					<img className="img-fluid" src="/img/slider/01.jpg" alt="" />
				</div>
				<div>
					<h3>2</h3>
					<img className="img-fluid" src="/img/slider/01.jpg" alt="" />
				</div>
				<div>
					<h3>3</h3>
					<img className="img-fluid" src="/img/slider/01.jpg" alt="" />
				</div>
				<div>
					<h3>4</h3>
					<img className="img-fluid" src="/img/slider/01.jpg" alt="" />
				</div>
				<div>
					<h3>5</h3>
					<img className="img-fluid" src="/img/slider/01.jpg" alt="" />
				</div>
				<div>
					<h3>6</h3>
					<img className="img-fluid" src="/img/slider/01.jpg" alt="" />
				</div>
			</Slider>
		</>
	);
};

export default ReactSlick;
