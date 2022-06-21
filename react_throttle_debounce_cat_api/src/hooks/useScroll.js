import { useEffect, useState } from "react";

const useScroll = () => {
	const [scrollY, setScrollY] = useState(window.scrollY);

	const handleScrollPostion = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPostion);

		return () => window.removeEventListener("scroll", handleScrollPostion);
	}, [scrollY]);

	return scrollY;
};

export default useScroll;
