const express = require("express");
const { tiktokAuthCallback } = require("../controller/tiktok.controller");
const router = express.Router();

router.get("/auth/tiktok/callback", tiktokAuthCallback);

module.exports = router;
