import { useEffect, useState } from "react";

const useWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleWidthChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWidthChange);

		return () => window.removeEventListener("resize", handleWidthChange);
	}, [width]);

	return width;
};

export default useWidth;
