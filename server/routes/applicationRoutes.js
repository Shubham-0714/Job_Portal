const express = require("express");
const router = express.Router();

const {
  applyJob,
  getApplicants
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/apply/:id", protect, applyJob);

router.get("/job/:jobId", protect, getApplicants);

module.exports = router;