import { useState, useEffect } from "react";

const useScroll = () => {
	const [scrollY, setScrollY] = useState(window.scrollY);

	const handleScrollYChange = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollYChange);

		return () => window.removeEventListener("scroll", handleScrollYChange);
	}, [scrollY]);

	return scrollY;
};

export default useScroll;
