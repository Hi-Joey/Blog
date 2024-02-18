import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/test", (req, res) => {
  console.log("test");
  res.cookie("token", "test", {
    httpOnly: true,
  });
  res.status(200).json("ok");
});

export default router;
