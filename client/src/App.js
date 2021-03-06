import React, { useState } from "react";
import "./app.scss";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
// import CalendarYouTube from "./components/CalendarYouTube/CalendarYouTube";
// import InputWithBttnInside from "./components/InputWithBttnInside/InputWithBttnInside";
// import DiffNumberCols from "./components/DiffNumberCols/DiffNumberCols";
// import UploadImage from "./components/UploadImage/UploadImage";
// import GoogleMap from "./components/GoogleMap/GoogleMap";
// import SvgIcon from "./components/SvgIcon/SvgIcon";
// import Select from "./components/Select/Select";
// import DownloadBtn from "./components/DownloadBtn/DownloadBtn";
// import Carousel from "./components/Carousel/Carousel";
// import ImgFit from "./components/ImgFit/ImgFit";
// import ReactTest from "./components/ReactTest/ReactTest";
// import PageOne from "./components/ContextChain/components/PageOne";
// import PageTwo from "./components/ContextChain/components/PageTwo";
// import PageThree from "./components/ContextChain/components/PageThree";
// import End from "./components/ContextChain/components/End";
// import CalendarRepeat from "./components/CalendarRepeat/CalendarRepeat";
// import Overflow from "./components/Overflow/Overflow";
// import StateList from "./components/StateList/StateList";
// import CalendarModal from "./components/CalendarModal/CalendarModal";
// import ChartDiagram from "./components/ChartDiagram/ChartDiagram";
import GeneratePDF from "./components/GeneratePDF/GeneratePDF";
import TableLayout01 from "./components/TableLayout01/TableLayout01";
import TableLayout02 from "./components/TableLayout02/TableLayout02";

// import { ChainProvider } from "./components/ContextChain/context/ChainState";

const App = () => {
	const [click, setClick] = useState(false);

	return (
		<>
			<div className="" id="app-container">
				<div
					className="space"
					onClick={() => setClick(!click)}
					style={{
						width: click ? "30rem" : "",
					}}
				>
					<Nav />
				</div>
				<Switch>
					{/* <Route path={"/calendar-repeat"} component={CalendarRepeat} />
					<Route path={"/calendar"} component={CalendarYouTube} />
					<Route path={"/overflow"} component={Overflow} />
					<Route path={"/state-list"} component={StateList} />
					<Route path={"/calendar-modal"} component={CalendarModal} />
					<Route path={"/chart"} component={ChartDiagram} /> */}
					<Route path={"/generate-pdf"} component={GeneratePDF} />
					<Route path={"/table-layout"} component={TableLayout01} />
					<Route path={"/table-layout02"} component={TableLayout02} />
					{/* <Route path={"/input-bttn"} component={InputWithBttnInside} /> */}
					{/* <Route path={"/diff-number-cols"} component={DiffNumberCols} /> */}
					{/* <Route path={"/image-upload"} component={UploadImage} /> */}
					{/* <Route path={"/google-map"} component={GoogleMap} /> */}
					{/* <Route path={"/svg-icon"} component={SvgIcon} /> */}
					{/* <Route path={"/select"} component={Select} /> */}
					{/* <Route path={"/download"} component={DownloadBtn} /> */}
					{/* <Route path={"/carousel"} component={Carousel} /> */}
					{/* <Route path={"/image-fit"} component={ImgFit} /> */}
					{/* <Route path={"/react-test"} component={ReactTest} /> */}
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
