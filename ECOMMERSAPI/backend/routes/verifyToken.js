const jwt = require("jsonwebtoken");

/* verify token */
const verifyToken = (req, res, next) => {
	const token = req.headers["x-auth-token"];

	if (token) {
		jwt.verify(token, process.env.SECRET, (err, data) => {
			if (err) {
				res.status(403).json("Invalid token");
			} else {
				req.user = data;
				next();
			}
		});
	} else {
		return res.status(401).json("Authorization denied!");
	}
};

// verify token or admin role
const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to do this!");
		}
	});
};

// verify token or admin role
const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("Only Admin is allowed for this operation!");
		}
	});
};

module.exports = {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
};
