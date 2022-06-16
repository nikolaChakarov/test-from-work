import Search from "./search/Search";
import useScroll from "./hooks/useScroll";
import { useEffect } from "react";

const App = () => {
	const scroll = useScroll();

	useEffect(() => {
		if (scroll > 500) {
			console.log(scroll);
		}
	}, [scroll]);

	return (
		<div>
			<Search />

			{new Array(100).fill("").map((el, i) => (
				<p key={i}>{i}</p>
			))}
		</div>
	);
};

export default App;
