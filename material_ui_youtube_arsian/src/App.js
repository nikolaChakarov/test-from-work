import React from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Test from "./components/Test";

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</>
	);
};

export default App;
