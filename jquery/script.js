$(document).ready(function () {
	$("h3").css({ border: "3px dashed red" });

	$(".wrapper").css({ border: "3px dashed green" });

	$("header nav li:first").css({ border: "3px dashed yellow" });

	$("section:not('#points-of-sale')").css({ background: "red" });

	$("#social-nav li:gt(2)").css({ border: "3px dashed yellow" });
});
