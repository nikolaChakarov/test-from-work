import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import CallbackDemo from "./CallbackDemo";
import MemoDemo from "./MemoDemo";
import RefDemo from "./RefDemo";
import Debounce from "./Debounce";
import ThrottleDemo from "./ThrottleDemo";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/callback" element={<CallbackDemo />} />
				<Route path="/memo" element={<MemoDemo />} />
				<Route path="/ref" element={<RefDemo />} />
				<Route path="/debounce" element={<Debounce />} />
				<Route path="/throttle" element={<ThrottleDemo />} />
			</Routes>
		</div>
	);
};

export default App;
