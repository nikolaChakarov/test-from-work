import { Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";

const App = () => {
	return (
		<div>
			<h1>stripe</h1>
			<Routes>
				<Route path="/pay" element={<Pay />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</div>
	);
};

export default App;
