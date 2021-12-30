import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupons';
const COLLECTION_NAME = 'coupons';


export const couponSchema = new mongoose.Schema({
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    large_area_name: {
        type: mongoose.Schema.Types.String,
        required: false,
        },
    small_area_name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    PRICE_RATE:{
        type: mongoose.Schema.Types.Number,
        required: true,
        
    },
    Product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
}, {
    timestamps: true,
});

export const CouponModel = mongoose.model(DOCUMENT_NAME, couponSchema, COLLECTION_NAME)