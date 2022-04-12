import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Sidebar from "./components/Sidebar.js/Sidebar";
import Form from "./components/Form";
import LayoutFlex01 from "./components/LayoutFlex01/LayoutFlex01";
import LayoutInnerScroll2 from "./components/LayoutInnerScroll2/LayoutInnerScroll2";
import FlexBoxTraversyMedia from "./components/FlexBoxTraversyMedia/FlexBoxTraversyMedia";
import UploadDownload from "./components/UploadDownload/UploadDownload";

import PdfCreator from "./components/PdfCreator/PdfCreator";
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
	return (
		<div className="" id="main-app">
			<Sidebar />
			<div className="app-body container-fluid">
				<PDFDownloadLink document={<PdfCreator />} fileName="test">
					{({ loading }) => (!loading ? "loading..." : "download pdf")}
				</PDFDownloadLink>

				<Switch>
					<Route path={"/form"} component={Form} />
					<Route path={"/layout-01"} component={LayoutFlex01} />
					<Route path={"/layout02"} component={LayoutInnerScroll2} />
					<Route path={"/flex-box"} component={FlexBoxTraversyMedia} />
					<Route path={"/up-down"} component={UploadDownload} />
					{/* <Route path={"/pdf"} component={PdfCreator} /> */}
				</Switch>
			</div>
		</div>
	);
};

export default App;
