import { useState, useEffect } from "react";

const useScroll = () => {
	const [value, setValue] = useState(0);

	const onScrollHandler = () => {
		setValue(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScrollHandler);

		return () => {
			window.removeEventListener("scroll", onScrollHandler);
		};
	}, [value]);

	return value;
};

export default useScroll;
