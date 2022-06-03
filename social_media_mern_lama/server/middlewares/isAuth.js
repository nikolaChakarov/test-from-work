const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
	try {
		const token = req.headers["x-auth-token"];

		if (!token) {
			throw "unauthorized";
		}

		jwt.verify(token, process.env.SECRET, (err, data) => {
			if (err) {
				throw "unauthorized";
			}
			req.user = data;
			next();
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err });
	}
};

module.exports = isAuth;
