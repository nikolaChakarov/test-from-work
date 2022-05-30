import { useState, useEffect } from "react";

const useDebounced = (init, delay) => {
	const [value, setValue] = useState(init);

	const updateValue = (data) => {
		setValue(data);
	};

	useEffect(() => {
		let timer = setTimeout(() => {
			updateValue(init);
		}, delay);

		return () => clearTimeout(timer);
	}, [init, delay]);

	return value;
};

export default useDebounced;
