import express from 'express';
import coupons from "./coupons/index.js";
import auth from "./auth/index.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/coupons",coupons);

export default router;