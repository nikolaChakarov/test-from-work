import { useState } from "react";

export const useForm = (callback, initState = {}) => {
	const [values, setValues] = useState({ ...initState });

	const onChange = (e) => {
		const inputName = e.target.name;
		const inputValue = e.target.value;

		setValues({ ...values, [inputName]: inputValue });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		callback();
	};

	return {
		values,
		setValues,
		onChange,
		onSubmit,
	};
};
