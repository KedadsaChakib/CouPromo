
import { CouponModel } from '../models/Coupon.js';
import { ProductModel } from '../models/Product.js';
import { UserModel } from '../models/User.js';
import fs from 'fs';

/**
 * Initialize mongodb
 */
export const init = async function () {
    try {
        // Checking if we need initialization
        const couponCount = await CouponModel.countDocuments().exec();
        console.info(`Count of coupons are ${couponCount}`);
    
        if (couponCount === 0) {
 
            const coupons = JSON.parse(fs.readFileSync(`${process.cwd()}/Coupons_list_trains.json`, 'utf8'));
            for (let i = 0; i < coupons.length; i++) {
               
                const productOfCoupon = await ProductModel.create({
                    CAPSULE_TEXT: coupons[i].CAPSULE_TEXT,
                    CATALOG_PRICE:coupons[i].CATALOG_PRICE,
                    DISCOUNT_PRICE:coupons[i].DISCOUNT_PRICE,
                    DISFROM:coupons[i].DISFROM,
                    DISPEND:coupons[i].DISPEND,
                });
                if (productOfCoupon) {
                    
                    const coupon = await CouponModel.create({
                        COUPON_ID_hash: coupons[i].COUPON_ID_hash,
                        large_area_name: coupons[i].large_area_name,
                        small_area_name: coupons[i].small_area_name,
                        PRICE_RATE:coupons[i].PRICE_RATE,
                        Product: productOfCoupon._id,
                    });
                }
            }
        } 
    
        const usersCount = await UserModel.countDocuments().exec();
        console.info(`Count of users are ${usersCount}`);
        
        if (usersCount === 0) {
           
            const users = JSON.parse(fs.readFileSync(`${process.cwd()}/Users.json`, 'utf8'));
            for (let i = 0; i < users.length; i++) {
                await UserModel.create(users[i]);
            }
        }
    } catch (err) {
        console.error(err);
    }
}