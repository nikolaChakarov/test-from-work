import { useState } from "react";

const useForm = (cb, init) => {
	const [values, setValues] = useState(init);

	const handleInputChange = (e) => {
		const inputName = e.target.name;
		const inputValue = e.target.value;

		setValues((prev) => ({
			...prev,
			[inputName]: inputValue,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		cb();
	};

	return { values, handleInputChange, handleSubmit };
};

export default useForm;
