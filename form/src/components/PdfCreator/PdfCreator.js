import React from "react";
import {
	Document,
	Page,
	Text,
	Image,
	StyleSheet,
	PDFViewer,
} from "@react-pdf/renderer";
import Elephants from "../../img/elephants.jpg";

const styles = StyleSheet.create({});

const PdfCreator = () => {
	return (
		<PDFViewer>
			<Document>
				<Page style={styles.body}>
					<Text style={styles.header} fixed>
						Some text
					</Text>
					<Image style={styles.image} src={Elephants} />
				</Page>
			</Document>
		</PDFViewer>
	);
};

export default PdfCreator;
