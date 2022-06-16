import { useEffect, useState } from "react";

const useScroll = () => {
	const [scroll, setScroll] = useState(window.scrollY);

	const handleScrollPosition = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPosition);

		return () => window.removeEventListener("scroll", handleScrollPosition);
	}, [scroll]);

	return scroll;
};

export default useScroll;
