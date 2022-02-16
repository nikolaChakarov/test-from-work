import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	PDFViewer,
	Link,
	Note,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
	page: {
		backgroundColor: "#dedede",
		color: "#333",
	},
	section: {
		margin: 10,
		padding: 10,
	},
	viewer: {
		width: window.innerWidth / 3, //the pdf viewer will take up all of the width and height
		height: window.innerHeight / 2,
	},
});

// Create Document Component
function GeneratePDF() {
	return (
		<PDFViewer style={styles.viewer}>
			{/* Start of the document*/}
			<Document>
				{/*render a single page*/}
				<Page size="A4" style={styles.page}>
					<View style={styles.section}>
						<Text>Hello</Text>
					</View>
					<View style={styles.section}>
						<Text>World</Text>
					</View>
					<Text>
						<Link src="https://www.facebook.com">Go to Facebook</Link>
					</Text>
					<br />
					<Note>This will take the user to Facebook</Note>
				</Page>
			</Document>
		</PDFViewer>
	);
}
export default GeneratePDF;
