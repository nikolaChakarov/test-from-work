const PDFDocument = require("pdfkit");

const buildPdf = (dataCallback, endCallback) => {
	const doc = new PDFDocument();

	doc.on("data", dataCallback);
	doc.on("end", endCallback);

	doc.fontSize(25).text("Some text with an embedded font!");
	doc.end();
};

module.exports = buildPdf;
