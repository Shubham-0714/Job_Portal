const express = require("express");
const router = express.Router();

const { applyJob } = require("../controllers/applicationController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/apply/:id", authMiddleware, applyJob);

module.exports = router;