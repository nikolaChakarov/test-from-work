import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import SearchAppBar from "./components/SearchAppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import DataGridComp from "./components/DataGridComp";

const App = () => {
	return (
		<>
			<SearchAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Tour />} />
				<Route path="/data-grid" element={<DataGridComp />} />
			</Routes>
		</>
	);
};

export default App;
