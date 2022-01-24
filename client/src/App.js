import React from "react";
import "./app.scss";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import CalendarYouTube from "./components/CalendarYouTube/CalendarYouTube";
import InputWithBttnInside from "./components/InputWithBttnInside/InputWithBttnInside";
import DiffNumberCols from "./components/DiffNumberCols/DiffNumberCols";
import UploadImage from "./components/UploadImage/UploadImage";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import SvgIcon from "./components/SvgIcon/SvgIcon";
import Select from "./components/Select/Select";
import DownloadBtn from "./components/DownloadBtn/DownloadBtn";
// import PageOne from "./components/ContextChain/components/PageOne";
// import PageTwo from "./components/ContextChain/components/PageTwo";
// import PageThree from "./components/ContextChain/components/PageThree";
// import End from "./components/ContextChain/components/End";

// import { ChainProvider } from "./components/ContextChain/context/ChainState";

const App = () => {
	return (
		<>
			<div className="container-fluid d-flex" id="app-container">
				<div className="space">
					<Nav />
				</div>
				<Switch>
					<Route path={"/calendar"} component={CalendarYouTube} />
					<Route path={"/input-bttn"} component={InputWithBttnInside} />
					<Route path={"/diff-number-cols"} component={DiffNumberCols} />
					<Route path={"/image-upload"} component={UploadImage} />
					<Route path={"/google-map"} component={GoogleMap} />
					<Route path={"/svg-icon"} component={SvgIcon} />
					<Route path={"/select"} component={Select} />
					<Route path={"/download"} component={DownloadBtn} />
					{/* <Route exact path={"/radio-form"} component={RadioBttn} />
					<ChainProvider>
						<Route path={"/page-one"} component={PageOne} />
						<Route path={"/page-two"} component={PageTwo} />
						<Route path={"/page-three"} component={PageThree} />
						<Route path={"/page-end"} component={End} />
					</ChainProvider> */}
				</Switch>
			</div>
		</>
	);
};

export default App;
