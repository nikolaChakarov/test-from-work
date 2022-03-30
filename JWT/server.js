const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [
	{ id: "1", username: "john", password: "123", isAdmin: true },
	{ id: "2", username: "sisa", password: "777", isAdmin: false },
];

app.post("/api/login", (req, res) => {
	const { username, password } = req.body;
	const user = users.find(
		(el) => el.username === username && el.password === password
	);

	if (user) {
		// Generate an access token
		const accessToken = jwt.sign(
			{
				id: user.id,
				isAdmin: user.isAdmin,
			},
			"my_secret",
			{ expiresIn: "15m" }
		);
		const { id, password, ...data } = user;

		res.json({ ...data, accessToken });
	} else {
		res.status(400).json("Invalid credentials");
	}
});

const verify = (req, res, next) => {
	const token = req.headers["x-auth-token"];

	if (token) {
		jwt.verify(token, "my_secret", (err, data) => {
			if (err) {
				return res.status(403).json("Token is not valid");
			}

			req.user = data;
			next();
		});
	} else {
		res.status(401).json("You are not authenticated!");
	}
};

app.delete("/api/del/:id", verify, (req, res) => {
	// we asign this value 'user' in our middleware 'verify' if everything with the json web token is ok
	const user = req.user;
	console.log(user);

	// just to test some things...
	const params = req.params;
	const urlData = req.query;
	console.log(urlData);

	res.json({ ...params, ...urlData });
});

app.listen(5000, () => {
	console.log("Server is listening");
});
