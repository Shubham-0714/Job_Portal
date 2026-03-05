const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Profile accessed successfully",
    user: req.user,
  });
});

router.get("/admin", protect, isAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin ",
    user: req.user,
  });
});

module.exports = router;
