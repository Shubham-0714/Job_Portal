const express = require("express");
const testController = require("../controllers/testController");
const healthController = require("../controllers/healthController");

const router = express.Router();

router.get("/test", testController);
router.get("/health", healthController);

module.exports = router;