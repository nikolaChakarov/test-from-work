import { useEffect, useState } from "react";

const useDebounce = (input, delay) => {
	const [value, setValue] = useState(input);

	const updateValue = (newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		let timer = setInterval(() => {
			updateValue(input);
		}, delay);

		return () => clearInterval(timer);
	}, [input, delay]);

	return value;
};

export default useDebounce;
