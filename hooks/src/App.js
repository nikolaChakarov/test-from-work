import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import CallbackDemo from "./CallbackDemo";
import MemoDemo from "./MemoDemo";
import Debounce from "./Debounce";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/callback" element={<CallbackDemo />} />
				<Route path="/memo" element={<MemoDemo />} />
				<Route path="/debounce" element={<Debounce />} />
			</Routes>
		</div>
	);
};

export default App;
