import { useCallback, useEffect, useRef, useState } from "react";

import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const Form = () => {
	const inputEl = useRef();

	const { executeRecaptcha } = useGoogleReCaptcha();

	// Create an event handler so you can call the verification on button click event or form submit
	const handleReCaptchaVerify = useCallback(async () => {
		if (!executeRecaptcha) {
			console.log("Execute recaptcha not yet available");
			return;
		}

		const token = await executeRecaptcha("yourAction");
		// Do whatever you want with the token
		console.log(token);
	}, [executeRecaptcha]);

	// You can use useEffect to trigger the verification as soon as the component being loaded
	useEffect(() => {
		handleReCaptchaVerify();
	}, [handleReCaptchaVerify]);

	return (
		<div>
			<input type="text" ref={inputEl} />
			<button onClick={handleReCaptchaVerify}>Send</button>
		</div>
	);
};

export default Form;
