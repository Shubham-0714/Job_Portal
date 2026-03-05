const express = require("express");
const { createJob, getAllJobs } = require("../controllers/jobController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/create", protect, isAdmin, createJob);

router.get("/", getAllJobs);

module.exports = router;
