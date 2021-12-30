import { CouponModel } from "../../models/Coupon.js";

export const getAllCoupons = async (req, res, next) => {
    try {
        const coupons = await CouponModel.find();
        res.status(200).json(coupons);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}


export const getCouponById = async (req, res, next) => {
    try {
        const coupon = await CouponModel.findById(req.params.id);
        if (coupon) res.status(200).json(coupon);
        else res.status(404).json({ message: `Coupon with id ${req.params.id} not found` });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}


export const deleteCouponById = async (req, res, next) => {
    try {
        const couponToDelete = await CouponModel.findById(req.params.id);
        if (!couponToDelete) {
            res.status(404).json({ message: `Coupon with id ${req.params.id} not found` });
        } else {
            await CouponModel.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: `Coupon with id ${req.params.id} deleted succefully` });
        }
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}


export const createCoupon = async (req, res, next) => {
    try {
        if (!req.body.COUPON_ID_hash || !req.body.large_area_name || !req.body.small_area_name || !req.body.PRICE_RATE || !req.body.Product) {
            res.status(400).json({ message: "Missing attributes" });
        } else {
                const createdCoupon = await CouponModel.create(req.body);
                if (createdCoupon) {
                    res.status(200).json({ message: "Coupon created successfully" });
                } else {
                    res.status(400).json({ message: "Coupon creation failed" });
                }
            
            }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export const updateCoupon = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).json({ message: "No attributes found" });
        } else {
           
            const updatedCoupon = await CouponModel.findByIdAndUpdate(req.params.id, req.body);
            if (updatedCoupon) res.status(200).json({ message: "Coupon updated successfully" });
            res.status(400).json({ message: "Coupon updated failed" });

        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

