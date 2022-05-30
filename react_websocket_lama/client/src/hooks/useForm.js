import { useState } from "react";

const useForm = (cb, init) => {
	const [values, setValues] = useState(init);

	const onInputChange = (e) => {
		const inputName = e.target.name;
		const inputValue = e.target.value;

		setValues((prev) => ({
			...prev,
			[inputName]: inputValue,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();

		cb();
	};

	return { values, onInputChange, submitHandler };
};

export default useForm;
