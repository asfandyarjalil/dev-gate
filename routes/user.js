const express = require("express");
const router = express.Router();
const { checkout } = require("../controllers/user");
const isValidNumber = require("./../middleware/checkCardNumber");

router.post("/checkout", isValidNumber, checkout);
module.exports = router;
