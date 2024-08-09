const express = require("express");
const { createEmail, getEmails } = require("../controller/user.controller");
const router = express.Router();

router.post("/", createEmail);
router.get("/", getEmails);

module.exports = router;
