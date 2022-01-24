import "./TopMenu.scss";

const TopMenu = ({ list }) => {
	return (
		<div className="container-fluid" id="top-menu">
			{/* a component with one row and two columns;  col 1 -> menu; col 2 -> search bttns*/}
			<div className="row">
				{/* menu col */}
				<div className="col col-md-10 d-flex">
					{list.map((itemName, i) => {
						return (
							<div key={i} className="col">
								<div className="dropdown-set d-flex">
									<p>{itemName}</p>
									<img src="/img/arrow-down.svg" alt="arrow icon" />
								</div>
							</div>
						);
					})}
				</div>

				{/* search icons col; this col will be removed for mobile and placed in other component because of the mobile's version menu order */}
				<div className="col col-md-2 d-md-flex d-none">
					<div className="search">
						<img
							className="img-fluid"
							src="/img/search.svg"
							alt="search icon"
						/>
					</div>
					<div className="bell">
						<img className="img-fluid" src="/img/bell.svg" alt="bell icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopMenu;
