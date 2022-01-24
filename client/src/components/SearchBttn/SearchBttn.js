import React from "react";
import "./SearchBttn.scss";

const SearchBttn = () => {
	return (
		<div className="container-fluid mt-5">
			<div class="custom-search-bttn">
				<span id="bttn-img-wrapper">
					<img src="/img/search.svg" alt="" />
				</span>
				<input type="text" placeholder="Search" />
			</div>
		</div>
	);
};

export default SearchBttn;
