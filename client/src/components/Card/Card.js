import { useState } from "react";
import "./Card.scss";

const Cards = () => {
	return (
		<div className="container-fluid" id="cards-wrapper">
			<div className="row">
				{new Array(6).fill("").map((el, i) => {
					return (
						<div key={i} className="col col-md-4 col-12 mb-md-4 mb-3">
							<Card backImg={i + 1} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Card = ({ backImg }) => {
	const [click, setClick] = useState(false);

	return (
		<div className="container-fluid">
			<div className="card-custom" onClick={() => setClick(false)}>
				<div
					className="card-custom-header-container"
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + `/img/card/${backImg}.png`
						})`,
					}}
				>
					{/* accompagnateur image,  name, action buttons */}
					<div className="accomp-info">
						<div className=" accomp-photo-container">
							<img className="img-fluid" src="" alt="" />
						</div>
						<p className="accomp-name">Marina Sanpélégrino</p>
					</div>
					{/* action buttons */}
					<div className="accomp-actions">
						<div className="icon-bttn">
							<img className="img-fluid" src="" alt="" />
						</div>
						<div className="icon-bttn">
							<img className="img-fluid" src="" alt="" />
						</div>
						<div className="icon-bttn">
							<img className="img-fluid" src="" alt="" />
						</div>
					</div>

					{/* div decoration */}
					<div className="decor"></div>
				</div>

				{/* body */}
				<div className="card-custom-body">
					<div className="card-text">
						<span>Secteur local couvert :</span>
						<span className="purple-text">Metz, Montigny, Marly</span>
					</div>

					<div className="card-text mb-md-3 mb-1">
						<span>Domaines de spécialisation :</span>
						<span className="purple-text">Luxe</span>
					</div>

					{/* statistic */}
					<h2 className="statistic-title">statistiques d'accompagnement</h2>

					<div className="row mb-md-3 mb-2 px-md-0 px-5">
						<div className="col col-md-6 col-12 pe-md-2 mb-md-0 mb-2">
							<div className="statistic-black">
								<span>12</span>
								<span>Nombre de missions effectués</span>
							</div>
						</div>

						<div className="col col-md-6 col-12 ps-md-2">
							<div className="statistic-blue">
								<span>85%</span>
								<span>Taux global de succès</span>
							</div>
						</div>
					</div>

					<div className="row px-md-0 px-5">
						<div className="col col-md-8 col-12 mx-md-auto">
							<div className="statistic-red">
								<span>8/10</span>
								<span>Note de satisfaction propriétaire</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* card footer */}
			<div className="card-custom-footer" onClick={() => setClick(!click)}>
				{click
					? new Array(10).fill("").map((el, i) => {
							return <p key={i}>{i + 1}</p>;
					  })
					: null}

				<div className="avis-number text-center">avis proprietaire</div>
			</div>
		</div>
	);
};

export default Cards;
