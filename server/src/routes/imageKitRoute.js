const express = require("express");
const authenticateImageKit = require("../controllers/imageKitController");

const router = express.Router();

router.get("/auth", authenticateImageKit);

module.exports = router;
