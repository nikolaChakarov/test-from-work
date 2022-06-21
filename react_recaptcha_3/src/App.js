import Form from "./components/Form";

import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const App = () => {
	return (
		<GoogleReCaptchaProvider reCaptchaKey="6LfdV3kgAAAAABsGKwjRsQ7IgUBiAzSVeLGvtJhT">
			<Form />
		</GoogleReCaptchaProvider>
	);
};

export default App;
