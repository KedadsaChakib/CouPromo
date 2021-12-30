import express from 'express';
import { getAllCoupons, getCouponById, deleteCouponById, createCoupon, updateCoupon } from "./controller.js";
import { auth, authErrorHandler } from "../../core/auth.js";

const router = express.Router();



router.get('/all', getAllCoupons);


router.get('/:id', getCouponById);



router.delete('/:id', /*auth(), authErrorHandler(),*/ deleteCouponById);


router.post('/', createCoupon);

router.put('/', updateCoupon);

export default router;

