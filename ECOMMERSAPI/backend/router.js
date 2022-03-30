const router = require("express").Router();

router.use("/api/auth", require("./routes/auth"));
router.use("/api/users", require("./routes/user"));
router.use("/api/products", require("./routes/product"));
router.use("/api/carts", require("./routes/cart"));
router.use("/api/orders", require("./routes/order"));
router.use("/api/checkout", require("./routes/stripe"));

module.exports = router;
