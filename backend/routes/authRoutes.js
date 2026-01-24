import express from "express";
import dotenv from "dotenv";
import { register, login } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";
import User from "../models/Users.js";

import { refreshToken } from "../controllers/authController.js";

dotenv.config();
const router = express.Router();
router.post("/refresh-token", refreshToken);
router.post("/register", register);
router.post("/login", login);
router.get(
  "/drivers",
  protect,
  authorizeRoles("super_admin", "station_admin"),
  async (req, res) => {
    try {
      const drivers = await User.find({ role: "driver" });
      res.json(drivers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.get(
  "/passengers",
  protect,
  authorizeRoles("super_admin", "station_admin"),
  async (req, res) => {
    try {
      const passengers = await User.find({ role: "passenger" });
      res.json(passengers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.get("/me", protect, async (req, res) => {
  res.json(req.user);
});

router.put("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.fullName = req.body.fullName || user.fullName;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.profileImage = req.body.profileImage || user.profileImage;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
