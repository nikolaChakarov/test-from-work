const router = require("express").Router();

router.use("/api/auth", require("./routes/auth"));

router.use("/api/users", require("./routes/users"));
router.use("/api/posts", require("./routes/posts"));

module.exports = router;
