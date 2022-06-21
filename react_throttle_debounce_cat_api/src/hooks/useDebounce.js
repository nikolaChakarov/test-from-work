import { useState, useEffect } from "react";

const useDebounce = (query, delay) => {
	const [value, setValue] = useState(query);

	useEffect(() => {
		let time = setTimeout(() => {
			setValue(query);
		}, delay);

		return () => clearTimeout(time);
	}, [delay, query]);

	return value;
};

export default useDebounce;
