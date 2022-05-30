import { useEffect } from "react";

import useForm from "./hooks/useForm";
import useDebounced from "./hooks/useDebounced";

const Debounce = () => {
	const { values, onInputChange } = useForm(null, {
		name: "",
	});

	const debounced = useDebounced(values.name, 1000);

	function sendInfo() {
		console.log(values);
	}

	useEffect(() => {
		if (debounced) {
			sendInfo();
		}
	}, [debounced]);

	return (
		<>
			<input
				type="text"
				name="name"
				value={values.name}
				onChange={onInputChange}
			/>

			{/* <button onClick={sendInfo}>send</button> */}
		</>
	);
};

export default Debounce;
