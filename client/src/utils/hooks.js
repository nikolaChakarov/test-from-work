import { useState, useEffect } from "react";

export const useForm = (callback, initialState = {}) => {
	const [values, setValues] = useState(initialState);

	/* ----------------------------------------------------- */
	const onChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
		console.log(values);
	};
	const onFileUploadChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.files[0] });
	};

	const onBtnClick = (fieldName, specificValue) => {
		if (specificValue) {
			setValues({ ...values, [fieldName]: specificValue });
		} else {
			setValues({ ...values, [fieldName]: !values[fieldName] });
		}
	};

	const onFeatureBtnClick = (fieldName) => {
		let oldState = { ...values };
		if (values["features"] && !values["features"].includes(fieldName)) {
			if (oldState["features"].length === 0) {
				oldState["features"] = [fieldName];
			} else {
				oldState["features"].push(fieldName);
			}
		} else {
			//In case its already in there, remove it
			const idx = oldState["features"].indexOf(fieldName);
			if (idx > -1) {
				oldState["features"].splice(idx, 1);
			}
		}
		setValues(oldState);
		console.log(values);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		callback();
	};

	return {
		onChange,
		onSubmit,
		values,
		setValues,
		onBtnClick,
		onFileUploadChange,
		onFeatureBtnClick,
	};
};

export const useWidth = () => {
	const getWidth = () => {
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		);
	};

	const [width, setWidth] = useState(getWidth);

	useEffect(() => {
		let timeoutID = null;

		const resizeListener = () => {
			clearTimeout(timeoutID);

			timeoutID = setTimeout(() => setWidth(getWidth()), 150);
		};

		window.addEventListener("resize", resizeListener);

		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return width;
};
