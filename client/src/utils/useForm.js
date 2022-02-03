import { useState } from "react";

export const useForm = (callback, data = {}) => {
	const [values, setValues] = useState({ ...data });

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		callback();
	};

	return { onChange, onSubmit, values };
};
