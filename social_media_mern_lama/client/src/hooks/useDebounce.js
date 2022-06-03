import { useState, useEffect } from "react";

const useDebounce = (init, delay) => {
	const [value, setValue] = useState(init);

	const handleValue = (val) => {
		setValue(val);
	};

	useEffect(() => {
		let timer;

		timer = setTimeout(() => {
			handleValue(init);
		}, delay);

		return () => clearTimeout(timer);
	}, [init, delay]);

	return value;
};

export default useDebounce;
