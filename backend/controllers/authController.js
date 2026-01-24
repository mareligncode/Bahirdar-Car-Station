import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import dotenv from "dotenv";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

dotenv.config();

export const register = async (req, res) => {
  try {
    const fullName = req.body.fullName?.trim();
    const email = req.body.email?.trim();
    const phoneNumber = req.body.phoneNumber?.trim();
    const password = req.body.password?.trim();
    const role = req.body.role?.trim();

    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      accessToken,
      refreshToken,
      user,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const password = req.body.password?.trim();

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      accessToken,
      refreshToken,
      user,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken: token } = req.body;

    if (!token) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    const user = await User.findOne({ refreshToken: token });
    if (!user) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    try {
      jwt.verify(token, process.env.JWT_REFRESH_SECRET);

      const newAccessToken = generateAccessToken(user);

      res.status(200).json({
        accessToken: newAccessToken,
      });
    } catch (err) {
      console.error("REFRESH TOKEN ERROR:", err);
      return res.status(403).json({ message: "Token expired or invalid" });
    }
  } catch (error) {
    console.error("REFRESH TOKEN ERROR:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};
